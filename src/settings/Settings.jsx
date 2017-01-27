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
          Parental Controls On:
          <input
            className='checkbox'
            name='parentalControls'
            type="checkbox"
            checked={this.props.parentalControls}
            onChange={this.props.handleParentalControlsChange}
          />
        </div>
      </div>
    )
  }
}
