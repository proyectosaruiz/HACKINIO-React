import React from "react";
import PropTypes from "prop-types";

function Fieldform({
  type,
  name,
  id,
  change,
  // htmlFor,
  text = false,
  value,
  required = false,
  maxlength,
  placeholder,
}) {
  return (
    <div>
      {/* <label htmlFor={htmlFor}>{text}</label> */}
      {!text && (
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
      )}
      {text && (
        <textarea
          type={type}
          name={name}
          id={id}
          value={value}
          required={required}
          onChange={change}
          maxLength={maxlength}
          placeholder={placeholder}
        />
      )}
    </div>
  );
}

Fieldform.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  change: PropTypes.func,
  maxlength: PropTypes.string,
};

export default Fieldform;
