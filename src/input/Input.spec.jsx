import React from 'react'
import { render, mount } from 'enzyme'
import Input from './Input'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import chaiJsx from 'chai-jsx'

chai.use(chaiEnzyme())
chai.use(chaiJsx)

var expect = chai.expect
// let should = chai.should()

describe('<Input />', () => {
  it('should render placeholder text', () => {
    const wrapper = mount(<Input placeholder='lol' />)
    const input = wrapper.find('input')
    expect(input).to.have.prop('placeholder', 'lol')
  })
})
