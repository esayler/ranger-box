import React from 'react'
import App from '../app/App'
import { render, shallow, mount } from 'enzyme'
import Favorites from './Favorites'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import chaiJsx from 'chai-jsx'
import Joke from '../joke/Joke'

chai.use(chaiEnzyme())
chai.use(chaiJsx)

var expect = chai.expect

describe('<Favorites />', () => {

  describe('when favorites exist', () => {
    let location = {
      pathname: '/favorites',
      search: '',
      query: '',
      state: ''
    }

    let wrapper

    beforeEach(() => {
      wrapper = shallow(
        <Favorites favorites={[ { id: 1, joke: 'lol' } ]} location={location} />
      )
    })

    it('should have favorites', () => {
      const jokeList = wrapper.find('.favorites-list')
      expect(jokeList).to.have.exactly(1).descendants(Joke)
    })
  })

  describe('when favorites exist', () => {
    let location = {
      pathname: '/favorites',
      search: '',
      query: '',
      state: ''
    }

    let wrapper

    beforeEach(() => {
      wrapper = shallow(
        <Favorites favorites={[]} location={location} />
      )
    })

    it('should show message "No favorites to display!"', () => {
      const msg = wrapper.find('.error-no-favs')
      expect(msg).to.have.text('No favorites to display!')
    })


  })

})
