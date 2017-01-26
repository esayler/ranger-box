import React from 'react'
import { render, mount, shallow } from 'enzyme'
import Settings from './Settings'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import chaiJsx from 'chai-jsx'

chai.use(chaiEnzyme())
chai.use(chaiJsx)

var expect = chai.expect
// let should = chai.should()

describe('<Settings />', () => {
  it.skip('should have stuff', () => {
    const wrapper = mount(<Settings />)
  })
})
