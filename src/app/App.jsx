import React from 'react'
import Header from '../header/Header'
import Button from '../button/Button'
import Input from '../input/Input'
import Joke from '../joke/Joke'
import { browserHistory } from 'react-router'
import some from 'lodash/some'
import reject from 'lodash/reject'
import axios from 'axios'

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

  componentWillMount () {
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

    axios.get(`http://api.icndb.com/jokes/random/${str}?escape=javascript${exclude}${name}`, {
    })
    .then(response => {
      if (num === 1 && !this.state.gotRandomJoke) {
        this.setState({randomJoke: response.data.value, gotRandomJoke: true})
      } else {
        this.setState({jokes: response.data.value})
      }
    })
    .catch(error => {
      console.log(error)
    })
  }

  updateInputNumState (e) {
    this.setState({ draftNum: e.target.value })
  }

  handleClick () {
    this.setState({numJokesToGet: this.state.draftNum || this.state.numJokesToGet})
    this.getRandomJokes()
    browserHistory.push('/jokes')
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
        <Header
          name={this.state.name}
          handleSettingsButtonClick={() => browserHistory.push('/settings')}
          buttonText='Settings'
        />
        <Joke
          className='random-joke-box'
          data={this.state.randomJoke}
          saveFavorite={this.saveFavorite}
          // starred={this.isStarred(this.state.favorites, this.state.randomJoke.value)}
        />
        <div className='user-input'>
          <Button
            className='btn-get-jokes'
            text='Get Jokes'
            handleClick={() => this.handleClick()}
          />
          <Input
            className='input-num'
            type='number'
            placeholder={this.state.numJokesToGet}
            value={this.state.draftNum}
            updateState={(e) => this.updateInputNumState(e)}
            handleKeyPress={(e) => {}}
          />
          <Button
            className='btn-get-favorites'
            text='Favorites'
            handleClick={() => browserHistory.push('/favorites')}
          />
        </div>
        {React.cloneElement(this.props.children,
          { jokes: this.state.jokes,
            handleClick: this.handleClick,
            numJokesToGet: this.state.numJokesToGet,
            favorites: this.state.favorites,
            saveFavorite: this.saveFavorite,
            setName: this.setName,
            name: this.state.name,
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
  children: React.PropTypes.element.isRequired
}
