import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ isError, message }) => {
  const className = isError ? 'notification error' : 'notification success';

  return (
    <div className={className}>
      <p className='message'>{message}</p>
    </div>
  );
}

Notification.propTypes = {
  message: PropTypes.string
}

export default Notification;
