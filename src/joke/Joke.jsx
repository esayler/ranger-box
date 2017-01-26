import React from 'react'
import Button from '../button/Button'

const Joke = (props) => {

  return (
    <div className={props.className}>
      <p>{props.data ? props.data.joke : 'Getting Joke...'}</p>
      <Button
        className='btn-star'
        text={<i className={`${props.starred ? 'starred' : ''} fa fa-star icon-large`}></i>}
        handleClick={() => props.saveFavorite(props.data)}
      />
    </div>
  )
}

export default Joke
