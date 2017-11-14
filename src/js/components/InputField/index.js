import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({
  hasError,
  onBlur,
  onChange,
  name,
  placeholder,
  type,
  value
}) => {
  let className = 'inputField';
  className = hasError ? `${className} hasError` : `inputField`;

  return (
    <input
      className={className}
      onBlur={onBlur}
      onChange={onChange}
      name={name}
      placeholder={placeholder}
      type={type}
      value={value} />
  );
}

InputField.propTypes = {
  hasError: PropTypes.bool,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.string
}

export default InputField;
