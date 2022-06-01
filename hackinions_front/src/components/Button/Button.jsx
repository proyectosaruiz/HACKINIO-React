import PropTypes from "prop-types";
import "./button.css";
import React from "react";

function Button({ href, click, text, disabled = false }) {
  const Component = href ? "a" : "button";
  return (
    <Component
      href={href}
      onClick={() => click && click()}
      className="button"
      to="/"
      disabled={disabled}
    >
      {text}
    </Component>
  );
}

Button.propTypes = {
  click: PropTypes.func,
  href: PropTypes.string,
  withstyles: PropTypes.bool,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
