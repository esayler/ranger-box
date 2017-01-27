import React from 'react'
import { render, mount, shallow } from 'enzyme'
import Settings from './Settings'
import App from '../app/App'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import chaiJsx from 'chai-jsx'

chai.use(chaiEnzyme())
chai.use(chaiJsx)

var expect = chai.expect
// let should = chai.should()

describe('<Settings />', () => {
  let wrapper

  describe('when visiting the settings page', () => {
    beforeEach(() => {
      wrapper = mount(
        <App children={<Settings />} />
      )
    })

    it('should have a text input field for entering a custom name', () => {
      const nameInputField = wrapper.find('.input .name-input')
      expect(nameInputField).to.exist
    })

    it('should have a button for submitting a custom name', () => {
      const setNameBtn = wrapper.find('.btn .btn-set-name')
      expect(setNameBtn).to.exist
    })

    it('should have a button for resetting the name', () => {
      const resetNameBtn = wrapper.find('.btn .btn-reset-name')
      expect(resetNameBtn).to.exist
    })

    it('should have a toggle switch to set parentalControls', () => {
      const toggleNSFW = wrapper.find('.checkbox')
      expect(toggleNSFW).to.exist
    })
  })

  describe('setting a custom name', () => {
    let nameInputField
    let setNameBtn
    let resetNameBtn

    beforeEach(() => {
      wrapper = mount(
        <App children={<Settings />} />
      )
      nameInputField = wrapper.find('.input .name-input')
      setNameBtn = wrapper.find('.btn .btn-set-name')
      resetNameBtn = wrapper.find('.btn .btn-reset-name')
    })

    it('should update the custom name when user clicks "Set"', () => {
      nameInputField.simulate('change', {
        target: {
          value: 'John Doe'
        }
      })
      setNameBtn.simulate('click')
      expect(wrapper.state('name')).to.deep.equal({first: 'John', last: 'Doe'})
    })

    it('should update the title when user clicks "Set"', () => {
      nameInputField.simulate('change', {
        target: {
          value: 'John Doe'
        }
      })
      setNameBtn.simulate('click')
      expect(wrapper.find('.title')).to.have.text('John Doe Joke Machine')
    })
  })

  describe('resetting a custom name', () => {
    let nameInputField
    let setNameBtn
    let resetNameBtn

    beforeEach(() => {
      wrapper = mount(
        <App children={<Settings />} />
      )
      nameInputField = wrapper.find('.input .name-input')
      setNameBtn = wrapper.find('.btn .btn-set-name')
      resetNameBtn = wrapper.find('.btn .btn-reset-name')
    })

    it('should reset the custom name when user click "Reset"', () => {
      wrapper.setState({ name: {first: 'John', last: 'Doe'} });
      expect(wrapper.state('name')).to.deep.equal({first: 'John', last: 'Doe'})
      resetNameBtn.simulate('click')
      expect(wrapper.state('name')).to.deep.equal({first: '', last: ''})
    })

    it('should reset the title to "Chuck Norris Joke Machine"', () => {
      wrapper.setState({ name: {first: 'John', last: 'Doe'} })
      expect(wrapper.find('.title')).to.have.text('John Doe Joke Machine')
      resetNameBtn.simulate('click')
      expect(wrapper.find('.title')).to.have.text('Chuck Norris Joke Machine')
    })
  })

  describe('parentalControls toggle switch', () => {
    let toggleNSFW

    beforeEach(() => {
      wrapper = mount(
        <App children={<Settings parentalControls={false} />} />
      )
      toggleNSFW = wrapper.find('.checkbox')
    })

    it('should be initially unchecked', () => {
      // expect(toggleNSFW).to.not.be.checked()
      expect(toggleNSFW).to.have.prop('checked', false)
    })

    it.skip('should be checked after a user clicks on it', () => {
      // expect(toggleNSFW).to.not.be.checked()
      expect(toggleNSFW).to.have.prop('checked', false)

      toggleNSFW.simulate('change', {
        target: {
          'checked': true
        }
      })

      // toggleNSFW.simulate('click')
      // expect(toggleNSFW).to.be.checked()
      expect(toggleNSFW).to.have.prop('checked', true)
    })
  })
})
