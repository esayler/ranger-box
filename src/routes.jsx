import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './app/App'
import Home from './home/Home'
import JokeList from './joke-list/JokeList'
import Settings from './settings/Settings'
import Favorites from './favorites/Favorites'

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />

    <Route path='/jokes' component={JokeList} />
    <Route path='/settings' component={Settings} />

    <Route path='/favorites' component={Favorites} />
  </Route>
)

export default routes
