import React from "react";
import PropTypes from "prop-types";

function Button({ onClick, children, className, ...rest }) {
  return (
    <button
      className={`bg-indigo-600 text-white text-sm font-bold tracking-wide rounded-full px-5 py-2 ${className}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default React.memo(Button);
