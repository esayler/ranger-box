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
                isFavorite={true}
                saveFavorite={props.saveFavorite} />
            )
          })
          : <p className='error-no-favs'>No favorites to display!</p> }
    </div>
  )
}

// Favorites.propTypes = {
//   favorites: React.propTypes.arrayOf(React.PropTypes.object)
// }

export default Favorites
