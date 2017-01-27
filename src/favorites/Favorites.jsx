import React from 'react'
import Joke from '../joke/Joke'

const Favorites = (props) => {
  return (
    <div className='favorites-list'>
      { props.favorites.length !== 0
          ? props.favorites.map(item => {
            return (
              <Joke
                key={item.id}
                starred
                className='joke-box'
                data={item}
                isFavorite
                saveFavorite={props.saveFavorite} />
            )
          })
          : <p className='error-no-favs'>No favorites to display!</p> }
    </div>
  )
}

Favorites.propTypes = {
  favorites: React.PropTypes.arrayOf(React.PropTypes.object),
  isFavorite: React.PropTypes.bool,
  saveFavorite: React.PropTypes.func

}

export default Favorites
