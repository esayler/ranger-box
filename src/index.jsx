import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Root from './root/Root'

require('./styles/main.scss')

const rootElement = document.getElementById('root')
ReactDOM.render(
  <AppContainer>
    <Root />
  </AppContainer>,
  rootElement
)

if (module.hot) {
  module.hot.accept('./app/App', () => {
    ReactDOM.render(
      <AppContainer>
        <Root />
      </AppContainer>,
      rootElement
    )
  })
}
