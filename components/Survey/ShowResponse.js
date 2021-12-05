import React from "react";
import PropTypes from "prop-types";

function ShowResponse({ title, survey, answers }) {
  const filteredSurvey = survey.filter(({ id }) => {
    return answers[id] !== undefined;
  });

  return (
    <>
      <div className="text-2xl font-bold">{title}</div>
      <div className="mt-8">
        {filteredSurvey.map(({ title, id }) => {
          return (
            <div key={id} className="mt-2">
              <p className="text-xl italic">Q. {title}</p>
              <p className="text-lg pt-2 pb-2">A. {answers[id].value}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

ShowResponse.propType = {
  title: PropTypes.string.isRequired,
  survey: PropTypes.array.isRequired,
  answers: PropTypes.object.isRequired,
};

export default React.memo(ShowResponse);
