import React from 'react';
import './Button.css'

const Button = (props) => (
  <div>
    <button className="button" onClick={props.onClick}>
      <div className="button-text">{props.text}</div>
    </button>
  </div>
)

export default Button;