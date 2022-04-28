import React from 'react';
import PropTypes from 'prop-types'
import './Button.css'

function Button({title, action, icon, disabled}) {

  return (
    <button className="button" onClick={action} disabled={disabled ?? false}>
      {title}
      {icon ? icon : null }
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string,
  action: PropTypes.func,
  icon: PropTypes.element,
  disabled: PropTypes.bool
}

export default Button;