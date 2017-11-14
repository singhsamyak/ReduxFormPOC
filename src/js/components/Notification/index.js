import React from 'react';
import PropTypes from 'prop-types';

const Notification = (props) => {
  return (
    <div className='notification'>
      <p className='message'>{props.message}</p>
    </div>
  );
}

Notification.propTypes = {
  message: PropTypes.string
}

export default Notification;
