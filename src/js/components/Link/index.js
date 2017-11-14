import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ href, title }) => {
  const accessibleProps = href ? { href } : { role: 'link', tabIndex: '0' };

  return (
    <a className='link' {...accessibleProps}>{title}</a>
  );
}

Link.propTypes = {
  href: PropTypes.string,
  title: PropTypes.string.isRequired
}

export default Link;
