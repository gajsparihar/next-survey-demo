import React from "react";
import PropTypes from "prop-types";

function Radio({ value, text, name, selected, onClick }) {
  return (
    <label
      htmlFor={value}
      className={`block mt-4 border border-gray-300 rounded-lg py-2 px-6 text-lg hover:bg-gray-100 cursor-pointer ${
        selected && "bg-green-200"
      }`}
    >
      <input
        className="hidden"
        type="radio"
        name={name}
        id={value}
        value={value}
        onClick={() => onClick({ key: value, value: text })}
      />{" "}
      {text}
    </label>
  );
}

Radio.propTypes = {
  value: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  selected: PropTypes.bool,
  onClick: PropTypes.func,
};

export default React.memo(Radio);
