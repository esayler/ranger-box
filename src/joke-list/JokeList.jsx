import React from 'react'
import Joke from '../joke/Joke'
import some from 'lodash/some'

const JokeList = (props) => {
  return (
    <div className='joke-list'>
      { props.jokes.map(item => <Joke key={item.id} starred={isStarred(props, item)} className='joke-box' data={item} saveFavorite={props.saveFavorite} />) }
    </div>
  )
}

const isStarred = (props, item) => {
  const found = some(props.favorites, ['id', item.id])
  return found
}

export default JokeList
