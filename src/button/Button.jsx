import React from 'react'

const Button = ({ text, handleClick, className, disabled }) => {
  return (
    <button
      className={`btn ${className}`}
      disabled={disabled}
      onClick={() => handleClick()}>{ text }</button>
  )
}

Button.propTypes = {
  className: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  text: React.PropTypes.string,
  handleClick: React.PropTypes.func
}

export default Button
