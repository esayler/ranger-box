import React from 'react'
import { render } from 'enzyme'
import Input from './Input'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import chaiJsx from 'chai-jsx'

chai.use(chaiEnzyme())
chai.use(chaiJsx)

var expect = chai.expect
// let should = chai.should()

describe('<Input />', () => {
  it.skip('should render text', () => {
    const wrapper = render(<Input />)
  })
})