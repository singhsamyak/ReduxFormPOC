import React from 'react';
import PropTypes from 'prop-types';

const InputField = (props) => {
  let className = 'inputField';
  className = props.hasError ? `${className} hasError` : `inputField`;

  return (
    <input
      className={className}
      onChange={props.onChange}
      name={props.name}
      placeholder={props.placeholder}
      type={props.type}
      value={props.value} />
  );
}

InputField.PropTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.string
}

export default InputField;
