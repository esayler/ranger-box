import React, { Component } from 'react'

export default class Input extends Component {
  render () {
    const { type, placeholder, value, updateState, handleKeyPress } = this.props
    return (
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onKeyPress={handleKeyPress}
        onChange={updateState}
      />
    )
  }
}

Input.propTypes = {
  type: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  value: React.PropTypes.string.isRequired,
  updateState: React.PropTypes.func.isRequired,
  handleKeyPress: React.PropTypes.func
}
