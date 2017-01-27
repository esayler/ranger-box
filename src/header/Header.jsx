import React from 'react'
import Button from '../button/Button'

const Header = ({buttonText, handleSettingsButtonClick, name}) => {
  return (
    <div className='header'>
      <Button
        className='btn-settings'
        text={buttonText}
        handleClick={handleSettingsButtonClick}
      />
      <h1 className='title'>{name.first !== '' ? `${name.first} ${name.last}` : 'Chuck Norris'} Joke Machine</h1>
    </div>
  )
}

export default Header
