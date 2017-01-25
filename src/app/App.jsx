import React from 'react'
import Header from '../header/Header'
import Button from '../button/Button'
import Input from '../input/Input'
import Joke from '../joke/Joke'
import { browserHistory } from 'react-router'

export default class App extends React.Component {
  constructor () {
    super()
    this.state = {
      numJokesToGet: 5,
      draftNum: '',
      jokes: [],
      gotRandomJoke: false,
      randomJoke: {
        value: {
          joke: ''
        }
      }
    }
    this.getRandomJokes = this.getRandomJokes.bind(this)
  }

  componentDidMount () {
    this.setState({randomJoke: this.getRandomJokes() })
  }

  getRandomJokes () {
    const num = this.state.gotRandomJoke ? this.state.numJokesToGet : 1
    let str = num && num !== 1 ? parseInt(num, 10) : ''
    let array = []

    console.log(`http://api.icndb.com/jokes/random/${str}`)

    fetch(`http://api.icndb.com/jokes/random/${str}?escape=javascript`)
      .then(response => {
        response.json()
          .then(data => {
            if (num === 1 && !this.state.gotRandomJoke) {
              this.setState({randomJoke: data, gotRandomJoke: true})
            } else {
              console.log('getting jokes')
              this.setState({jokes: data.value})
            }
          })
      })
  }

  goToLink (path) {
    browserHistory.push(path)
  }

  updateState (e) {
    this.setState({ draftNum: e.target.value })
  }

  handleClick () {
    this.setState({numJokesToGet: this.state.draftNum || 5})
    this.getRandomJokes()
    this.goToLink('/jokes')
    this.setState({draftNum: ''})
  }

  render () {
    return (
      <div>
        <Header />
        <Joke className='random-joke-box' data={this.state.randomJoke.value} />
        <Button
          className='btn-get-jokes'
          text='Get Jokes'
          handleClick={this.handleClick.bind(this)}
        />
        <Input
          type='number'
          placeholder={this.state.numJokesToGet}
          value={this.state.draftNum}
          updateState={this.updateState.bind(this)}
          handleKeyPress={(e) => {}}
        />
        <Button
          className='btn-get-favorites'
          text='Get Favorites'
          handleClick={this.goToLink.bind(this, '/favorites')}
        />
      {React.cloneElement(this.props.children, { jokes: this.state.jokes })}
      </div>
    )
  }
}

App.propTypes = {
  children: React.PropTypes.element
}
