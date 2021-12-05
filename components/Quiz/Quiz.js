import { useEffect, useState } from "react";
import { getQuiz, saveQuizAnswers } from "../../lib/api";
import Button from "../utils/Button";

import QuizQuestion from "./QuizQuestion";

export default function Quiz({ title }) {
  const [quizes, setQuizes] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [answers, setAnswers] = useState({});

  //get quizes
  const fetchQuizes = async () => {
    try {
      const quizes = await getQuiz();
      console.log(quizes);
      setQuizes(quizes);
      setCurrentQuestion(quizes[0]);
    } catch {
      setQuizes([]);
    }
  };

  const onSelect = (value) => {
    setAnswers({
      ...answers,
      [currentQuestion.id]: value,
    });
  };

  const getNextQuestion = () => {
    let nextQuestion = null;
    if (!currentQuestion.isLast) {
      nextQuestion = quizes.filter(({ condition }) => {
        return (
          condition &&
          condition.questionId === currentQuestion.id &&
          condition.response === answers[currentQuestion.id]
        );
      })[0];
    }
    return nextQuestion;
  };

  const goNext = () => {
    const nextQuest = getNextQuestion();
    if (nextQuest) setCurrentQuestion(nextQuest);
  };

  const handleSubmit = () => {
    saveQuizAnswers(answers);
  };

  useEffect(() => {
    fetchQuizes();
  }, []);

  console.log(currentQuestion);

  return (
    <>
      <h1 className="font-bold text-5xl text-center text-indigo-700">
        {title}
      </h1>
      <div className="bg-white p-12 rounded-lg shadow-lg w-full mt-8">
        <QuizQuestion
          selected={answers[currentQuestion.id]}
          question={currentQuestion}
          onSelect={onSelect}
        />
        <div className="mt-6 flow-root">
          {!currentQuestion.isLast && <Button onClick={goNext}>Next</Button>}
          {currentQuestion.isLast && (
            <Button onClick={handleSubmit}>Submit</Button>
          )}
        </div>
      </div>
    </>
  );
}
