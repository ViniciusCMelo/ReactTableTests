import React from 'react';
import PropTypes from 'prop-types'
import './Button.css'

function Button({title, action, icon}) {

  return (
    <button className="button" onClick={action}>
      {title}
      {icon ? icon : null }
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string,
  action: PropTypes.func,
  icon: PropTypes.element
}

export default Button;