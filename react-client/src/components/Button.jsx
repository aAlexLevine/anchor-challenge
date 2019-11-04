import React from 'react';
import './Button.css'

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bool: false
    }
  }

  render() {
    return (
      <div>
        <button className="button" onClick={this.props.onClick}>
          <div className="button-text">{this.props.text}</div>
        </button>
      </div>
    )
  }
}
export default Button;