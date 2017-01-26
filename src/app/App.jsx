import React from 'react'
import Header from '../header/Header'
import Button from '../button/Button'
import Input from '../input/Input'
import Joke from '../joke/Joke'
import { browserHistory } from 'react-router'
import some from 'lodash/some'
import reject from 'lodash/reject'

export default class App extends React.Component {
  constructor () {
    super()
    this.state = {
      favorites: [],
      numJokesToGet: 5,
      draftNum: '',
      jokes: [],
      gotRandomJoke: false,
      nameValue: '',
      randomJoke: {
        value: {
          joke: ''
        }
      },
      name: {
        first: '',
        last: ''
      },
      parentalControls: false
    }
    this.getRandomJokes = this.getRandomJokes.bind(this)
    this.setName = this.setName.bind(this)
    this.resetName = this.resetName.bind(this)
    this.updateNameDraftState = this.updateNameDraftState.bind(this)
    this.handleParentalControlsChange = this.handleParentalControlsChange.bind(this)
    this.saveFavorite = this.saveFavorite.bind(this)
    this.isStarred = this.isStarred.bind(this)
  }

  componentDidMount () {
    this.setState({ randomJoke: this.getRandomJokes() })
  }

  getRandomJokes () {
    const num = this.state.gotRandomJoke ? this.state.numJokesToGet : 1
    let str = num && num !== 1 ? parseInt(num, 10) : ''

    let exclude = this.state.parentalControls ? '&exclude=[explicit]' : ''

    let firstName = this.state.name.first
    let lastName = this.state.name.last

    let name = firstName && lastName
      ? `&firstName=${firstName}&lastName=${lastName}`
      : ''

    fetch(`http://api.icndb.com/jokes/random/${str}?escape=javascript${exclude}${name}`)
      .then(response => {
        response.json()
          .then(data => {
            if (num === 1 && !this.state.gotRandomJoke) {
              this.setState({randomJoke: data, gotRandomJoke: true})
            } else {
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

  setName () {
    if (this.state.nameValue === '') {
      return
    }
    const nameArray = this.state.nameValue.split(' ')
    this.setState({
      name: {
        first: nameArray[0],
        last: nameArray[1]
      }
    })
  }

  resetName () {
    this.setState({
      name: {
        first: '',
        last: ''
      },
      nameValue: ''
    })
  }

  updateNameDraftState (event) {
    this.setState({nameValue: event.target.value})
  }

  handleParentalControlsChange (e) {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    this.setState({
      [name]: value
    })
  }

  saveFavorite (joke) {
    let favorites = this.state.favorites

    if (!some(favorites, joke)) {
      favorites.push(joke)
      this.setState({
        favorites: favorites
      })
    } else {
      this.setState({
        favorites: reject(favorites, joke)
      })
    }
  }

  isStarred (favorites, item) {
    const found = some(favorites, ['id', item.id])
    return found
  }

  render () {
    return (
      <div>
        <Header name={this.state.name} handleSettingsButtonClick={this.goToLink.bind(this, '/settings')} />
        <Joke
          className='random-joke-box'
          data={this.state.randomJoke ? this.state.randomJoke.value : null}
          saveFavorite={this.saveFavorite}
          starred={this.isStarred(this.state.favorites, this.state.randomJoke.value)}
        />
        <div className='user-input'>
          <Button
            className='btn-get-jokes'
            text='Get Jokes'
            handleClick={this.handleClick.bind(this)}
          />
          <Input
            className='input-num'
            type='number'
            placeholder={this.state.numJokesToGet}
            value={this.state.draftNum}
            updateState={this.updateState.bind(this)}
            handleKeyPress={(e) => {}}
          />
          <Button
            className='btn-get-favorites'
            text='Favorites'
            handleClick={this.goToLink.bind(this, '/favorites')}
          />
        </div>
        {React.cloneElement(this.props.children,
          { jokes: this.state.jokes,
            favorites: this.state.favorites,
            saveFavorite: this.saveFavorite,
            setName: this.setName,
            nameValue: this.state.nameValue,
            resetName: this.resetName,
            updateNameDraftState: this.updateNameDraftState,
            parentalControls: this.state.parentalControls,
            handleParentalControlsChange: this.handleParentalControlsChange })}
      </div>
    )
  }
}

App.propTypes = {
  children: React.PropTypes.element
}
