import React from 'react'
import Button from '../button/Button'

const Joke = (props) => {

  return (
    <div className={props.className}>
      <div className={`${props.className}--text`}>
        <p>{props.data ? props.data.joke : 'Getting Joke...'}</p>
      </div>
      <div className={`${props.className}--joke-button`}>
        <Button
          className='btn-star'
          text={<i className={`${props.starred ? 'starred' : ''} fa fa-star fa-2x`}></i>}
          handleClick={() => props.saveFavorite(props.data)}
        />
      </div>
    </div>
  )
}

export default Joke
