import React from 'react'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <h1 className='title'>Chuck Norris Joke Machine</h1>
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children: React.PropTypes.element
}
