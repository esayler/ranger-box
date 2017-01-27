/* eslint-env node, mocha */

import React from 'react'
import { render, mount, shallow } from 'enzyme'
import App from './App'
import Home from '../home/Home'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import chaiJsx from 'chai-jsx'
import JokeList from '../joke-list/JokeList'
import Settings from '../settings/Settings'
import Favorites from '../favorites/Favorites'
import Header from '../header/Header'
import Joke from '../joke/Joke'

chai.use(chaiEnzyme())
chai.use(chaiJsx)

var expect = chai.expect

describe('<App />', () => {
  let wrapper
  let location = {
    pathname: '/',
    search: '',
    query: '',
    state: ''
  }

  describe('when visiting the home page', () => {
    beforeEach(() => {
      wrapper = shallow(
        <App children={<Home />} location={location} />
      )
    })

    it('should render <Header />', () => {
      expect(wrapper).to.have.descendants(Header)
    })

    it('should render <Home />', () => {
      expect(wrapper).to.have.descendants(Home)
      expect(wrapper).to.not.have.descendants(JokeList)
      expect(wrapper).to.not.have.descendants(Settings)
      expect(wrapper).to.not.have.descendants(Favorites)
    })

    it('renders as a <div>', () => {
      expect(wrapper.find('div')).to.exist
    })

    it('should render a random <Joke />', () => {
      expect(wrapper).to.have.descendants(Joke)
    })

    it('should render a user input field', () => {
      expect(wrapper).to.have.descendants('.user-input')
    })
  })

  describe('"Get Jokes" button', () => {
    let getJokesBtn
    let numJokesToGetUserInput
    beforeEach(() => {
      wrapper = mount(
        <App children={<Home />} location={location} />
      )
      getJokesBtn = wrapper.find('.btn .btn-get-jokes')
      numJokesToGetUserInput = wrapper.find('.input .input-num')
    })

    it('should have text "Get Jokes"', () => {
      expect(getJokesBtn).to.contain.text('Get Jokes')
    })

    it('should not be disabled', () => {
      expect(getJokesBtn).to.not.be.disabled()
    })

    it('should set state of numJokesToGet to default when clicked', () => {
      getJokesBtn.simulate('click')
      expect(wrapper).to.have.state('numJokesToGet').equal(5)
    })

    it('should set state of numJokesToGet to user input when clicked', () => {
      numJokesToGetUserInput.simulate('change', {
        target: {
          value: 10
        }
      })
      getJokesBtn.simulate('click')
      expect(wrapper).to.have.state('numJokesToGet').equal(10)
    })

    it('should clear the input field when clicked', () => {
      numJokesToGetUserInput.simulate('change', {
        target: {
          value: 10
        }
      })
      getJokesBtn.simulate('click')
      expect(numJokesToGetUserInput).to.be.blank()
      expect(numJokesToGetUserInput).to.have.prop('value', '')
    })

    it('should have a placeholder representing numJokesToGet', () => {
      numJokesToGetUserInput.simulate('change', {
        target: {
          value: 10
        }
      })
      getJokesBtn.simulate('click')
      expect(numJokesToGetUserInput).to.be.blank()
      expect(wrapper).to.have.state('numJokesToGet').equal(10)
      const placeholder = (wrapper).state('numJokesToGet')
      expect(numJokesToGetUserInput).to.have.prop('placeholder', placeholder)
    })

    it.skip('should clear state of draftNum', () => {
      numJokesToGetUserInput.simulate('change', {
        target: {
          value: 10
        }
      })
      getJokesBtn.simulate('click')
      expect(numJokesToGetUserInput).to.be.blank()
      expect(wrapper).to.have.state('numJokesToGet').equal(10)
      const placeholder = (wrapper).state('numJokesToGet')
      expect(numJokesToGetUserInput).to.have.prop('placeholder', placeholder)
    })
  })

  describe('"Settings" button in header when not on settings page', () => {
    let settingsBtn
    let location = {
      pathname: '/',
      search: '',
      query: '',
      state: ''
    }

    beforeEach(() => {
      wrapper = mount(
        <App children={<Home />} location={location} />
      )
      settingsBtn = wrapper.find('.btn .btn-settings')
    })

    it('should have text showing "Settings"', () => {
      expect(settingsBtn).to.contain.text('Settings')
    })
  })

  describe('"Settings" button in header when on settings page', () => {
    let settingsBtn
    let location = {
      pathname: '/settings',
      search: '',
      query: '',
      state: ''
    }

    beforeEach(() => {
      wrapper = mount(
        <App children={<Home />} location={location} />
      )
      settingsBtn = wrapper.find('.btn .btn-settings')
    })

    it('should have text showing "Jokes"', () => {
      // settingsBtn.simulate('click')
      expect(settingsBtn).to.contain.text('Jokes')
    })
  })
})
