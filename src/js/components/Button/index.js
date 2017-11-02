import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  let buttonType,
      className = 'button';
  if (props.isPrimary) {
    buttonType = 'submit';
    className += ' primary';
  } else {
    buttonType = 'button';
    className += ' secondary';
  }

  return (
    <input
      className={className}
      name={props.name}
      type={buttonType}
      value={props.value} />
  );
}

Button.PropTypes = {
  isPrimary: PropTypes.bool.isRequired,
  name: PropTypes.string,
  value: PropTypes.string.isRequired
}

export default Button;
