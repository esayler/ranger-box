import React from 'react'
import Joke from '../joke/Joke'

const JokeList = (props) => {
  return (
    <div className='joke-list'>
      { props.jokes.map(item => <Joke key={item.id} className='joke-box' data={item} />) }
    </div>
  )
}

export default JokeList
