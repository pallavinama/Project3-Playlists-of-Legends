import React from "react";
import PropTypes from "prop-types";

const Button = ({ text }) => {
  return (
    <button
      className="btn btn-primary"
      type="submit"
      name="action"
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
