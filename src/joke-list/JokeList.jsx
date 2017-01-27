import React from 'react'
import Joke from '../joke/Joke'
import some from 'lodash/some'

const JokeList = (props) => {
  const jokes = props.jokes.map(item => <Joke key={item.id} starred={isStarred(props.favorites, item)} className='joke-box' data={item} saveFavorite={props.saveFavorite} />)

  return (
    <div className='joke-list'>
        {jokes}
    </div>
  )
}

const isStarred = (favorites, item) => {
  const found = some(favorites, ['id', item.id])
  return found
}

JokeList.propTypes = {
  jokes: React.PropTypes.string.isRequired,
  starred: React.PropTypes.bool,
  favorites: React.PropTypes.arrayOf(React.PropTypes.object),
  saveFavorite: React.PropTypes.func
}

export default JokeList
