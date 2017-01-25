import React from 'react'
import { render, mount, shallow } from 'enzyme'
import Root from './Root'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import chaiJsx from 'chai-jsx'

chai.use(chaiEnzyme())
chai.use(chaiJsx)

var expect = chai.expect
// let should = chai.should()

describe('<Root />', () => {
  it('should host Router', () => {
    const wrapper = mount(<Root />)
    expect(wrapper).to.have.descendants('Router')
  })
})
