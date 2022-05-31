import React from "react";
import PropTypes from "prop-types";

function Fieldform({
  type,
  name,
  id,
  change,
  htmlFor,
  text,
  value,
  required = false,
}) {
  return (
    <div>
      <label htmlFor={htmlFor}>{text}</label>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        required={required}
        onChange={change}
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
};

export default Fieldform;
