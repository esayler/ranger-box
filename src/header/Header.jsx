import React from 'react'
import Button from '../button/Button'

const Header = ({handleSettingsButtonClick}) => {
  return (
    <div className='header'>
      <Button
        className='btn-settings'
        text='Settings'
        handleClick={handleSettingsButtonClick}
      />
      <h1 className='title'>Chuck Norris Joke Machine</h1>
    </div>
  )
}

export default Header
