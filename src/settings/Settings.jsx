import React from 'react'
import Button from '../button/Button'
import Input from '../input/Input'

export default class Settings extends React.Component {
  constructor () {
    super()
  }
  render () {
    return (
      <div className='settings-bar'>
        Set Name:
        <Input
          className='name-input'
          type='text'
          placeholder='Chuck Norris'
          value={this.props.nameValue}
          updateState={this.props.updateNameDraftState}
          handleKeyPress={(e) => {}}
        />
        <Button
          disabled={this.props.nameValue === ''}
          className='btn-set-name'
          text='Set'
          handleClick={this.props.setName}
        />
        <Button
          disabled={this.props.name.first === ''}
          className='btn-reset-name'
          text='Reset'
          handleClick={this.props.resetName}
        />
        <div className='parental-controls'>
          <div className='parental-label'>Parental Controls:</div>
          <label className='switch'>
            <input
              className='checkbox'
              name='parentalControls'
              type='checkbox'
              checked={this.props.parentalControls}
              onChange={this.props.handleParentalControlsChange}
            />
          <div className='slider round'></div>
          </label>
        </div>
      </div>
    )
  }
}
