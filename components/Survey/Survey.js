import React, { useCallback, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { getSurvey, saveSurveyResponse } from "../../lib/api";
import { STEP } from "../../lib/constant";
import Button from "../utils/Button";

import SurveyQuestion from "./SurveyQuestion";
import ShowResponse from "./ShowResponse";

function Survey({ title }) {
  const [survey, setSurvey] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [answers, setAnswers] = useState({});
  const [currentStep, setCurrentStep] = useState(STEP.QUESTION);

  //get the survey
  const fetchSurvey = async () => {
    try {
      const survey = await getSurvey();
      if (Array.isArray(survey) && survey.length > 0) {
        setSurvey(survey);
        setCurrentQuestion(survey[0]);
      }
    } catch {}
  };

  //fetch the survey
  useEffect(() => {
    fetchSurvey();
  }, []);

  //set answer for current question
  const onSelect = useCallback(
    (value) => {
      setAnswers({
        ...answers,
        [currentQuestion.id]: value,
      });
    },
    [currentQuestion, answers]
  );

  //find the next question based on answer
  const getNextQuestion = useCallback(() => {
    let nextQuestion = null;
    if (!currentQuestion.isLast) {
      nextQuestion = survey.filter(({ condition }) => {
        return (
          condition &&
          answers[currentQuestion.id] &&
          condition.questionId === currentQuestion.id &&
          condition.response === answers[currentQuestion.id].key
        );
      })[0];
    }
    return nextQuestion;
  }, [answers, survey, currentQuestion]);

  //go to next question
  const goToNextQuestion = useCallback(() => {
    //do nothing if current question is not answered
    if (!answers[currentQuestion.id]) {
      setCurrentQuestion({
        ...currentQuestion,
        isError: true,
      });
      return;
    }

    const nextQuest = getNextQuestion();
    if (nextQuest) {
      setCurrentQuestion(nextQuest);
    } else {
      //there is not next question - we reached to final
      setCurrentStep(STEP.REVIEW);
    }
  }, [getNextQuestion, answers, currentQuestion]);

  //save the answers to server
  const handleSubmit = useCallback(() => {
    saveSurveyResponse(answers);
    setCurrentStep(STEP.FINAL);
  }, [answers]);

  //restart survery
  const restartSurvey = useCallback(() => {
    setCurrentQuestion(survey[0]);
    setAnswers({});
    setCurrentStep(STEP.QUESTION);
  }, [survey]);

  return (
    <>
      <h1 className="font-bold text-5xl text-center text-indigo-700">
        {title}
      </h1>
      <div className="bg-white p-12 rounded-lg shadow-lg w-full mt-8">
        {currentStep === STEP.QUESTION && (
          <div>
            {currentQuestion.title && (
              <SurveyQuestion
                selected={answers[currentQuestion.id]}
                question={currentQuestion}
                onSelect={onSelect}
              />
            )}

            <div className="mt-6 flow-root">
              <Button className="float-right" onClick={goToNextQuestion}>
                Next
              </Button>
            </div>
          </div>
        )}

        {STEP.REVIEW === currentStep && (
          <div>
            <ShowResponse
              title="Thanks for survery! following response has been submitted"
              answers={answers}
              survey={survey}
            />
            <div className="text-center mt-4">
              <Button onClick={handleSubmit}>Submit</Button>
            </div>
          </div>
        )}

        {STEP.FINAL === currentStep && (
          <div className="text-center mt-4">
            <p className="text-xl mb-8 font-bold">
              Your response has been submitted
            </p>
            <Button onClick={restartSurvey}>Restart Survey</Button>
          </div>
        )}
      </div>
    </>
  );
}

Survey.propTypes = {
  title: PropTypes.string.isRequired,
};

export default React.memo(Survey);
