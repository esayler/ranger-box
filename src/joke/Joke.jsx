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
          text={<i className={`${props.starred ? 'starred' : ''} fa fa-star fa-2x`} />}
          handleClick={() => props.saveFavorite(props.data)}
        />
      </div>
    </div>
  )
}

Joke.propTypes = {
  className: React.PropTypes.string.isRequired,
  data: React.PropTypes.object,
  starred: React.PropTypes.bool,
  saveFavorite: React.PropTypes.func
}

export default Joke
