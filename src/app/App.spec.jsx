import React from 'react'
import { render, mount, shallow } from 'enzyme'
import App from './App'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import chaiJsx from 'chai-jsx'

chai.use(chaiEnzyme())
chai.use(chaiJsx)

var expect = chai.expect
// let should = chai.should()

describe('<App />', () => {
  it.skip('should render', () => {
    const wrapper = shallow(<App />)
  })
})
