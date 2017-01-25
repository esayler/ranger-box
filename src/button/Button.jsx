import React from 'react'

const Button = ({ text, handleClick, className }) => {
  return (
    <button
      className={`btn ${className}`}
      onClick={handleClick}>{text}</button>
  )
}
Button.propTypes = {
  className: React.PropTypes.string,
  text: React.PropTypes.string,
  handleClick: React.PropTypes.func
}

export default Button
