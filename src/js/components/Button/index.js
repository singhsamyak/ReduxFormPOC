import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ isPrimary, name, value }) => {
  let buttonType,
      className = 'button';

  if (isPrimary) {
    buttonType = 'submit';
    className += ' primary';
  } else {
    buttonType = 'button';
    className += ' secondary';
  }

  return (
    <input
      className={className}
      name={name}
      type={buttonType}
      value={value} />
  );
}

Button.propTypes = {
  isPrimary: PropTypes.bool,
  name: PropTypes.string,
  value: PropTypes.string.isRequired
}

export default Button;
