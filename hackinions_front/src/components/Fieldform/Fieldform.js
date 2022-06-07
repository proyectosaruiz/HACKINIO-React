import React from "react";
import PropTypes from "prop-types";

function Fieldform({
  type,
  name,
  id,
  change,
  // htmlFor,
  // text,
  value,
  required = false,
  maxlength,
  placeholder,
}) {
  return (
    <div>
      {/* <label htmlFor={htmlFor}>{text}</label> */}
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        required={required}
        onChange={change}
        maxLength={maxlength}
        placeholder={placeholder}
      />
    </div>
  );
}

Fieldform.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  change: PropTypes.func,
  htmlFor: PropTypes.string,
  text: PropTypes.string,
  maxlength: PropTypes.number,
};

export default Fieldform;
