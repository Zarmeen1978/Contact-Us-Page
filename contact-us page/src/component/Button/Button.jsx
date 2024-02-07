import React from 'react';
import './Button.css';

function Button({ isOutline, icon, text, ...rest }) {
  const buttonClassName = isOutline ? 'outline_button' : 'primary_button';

  return (
    <button className={buttonClassName} {...rest}>
      {icon} {text}
    </button>
  );
}

export default Button;
