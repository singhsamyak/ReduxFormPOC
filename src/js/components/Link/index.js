import React from 'react';
import PropTypes from 'prop-types';

const Link = (props) => {
  const accessibleProps = props.href ? { href: props.href } : { role: 'link', tabIndex: '0' };

  return (
    <a className='link' {...accessibleProps}>{props.title}</a>
  );
}

Link.propTypes = {
  href: PropTypes.string,
  title: PropTypes.string.isRequired
}

export default Link;
