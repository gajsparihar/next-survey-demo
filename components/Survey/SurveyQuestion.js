import React from "react";
import PropTypes from "prop-types";
import Radio from "../utils/Radio";

function SurveyQuestion({ question, selected, onSelect }) {
  const { title, options, id, isError } = question;
  return (
    <>
      <p className={`text-2xl font-bold ${isError ? "text-red-500" : ""}`}>
        {title || ""}
      </p>
      {options &&
        options.map(({ key, value }) => {
          return (
            <p key={key}>
              <Radio
                name={id}
                selected={selected && selected.key === key}
                value={key}
                text={value}
                onClick={onSelect}
              />
            </p>
          );
        })}
    </>
  );
}

SurveyQuestion.propTypes = {
  question: PropTypes.shape({
    title: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  selected: PropTypes.shape({
    key: PropTypes.string.isRequired,
    value: PropTypes.string,
  }),
};

export default React.memo(SurveyQuestion);
