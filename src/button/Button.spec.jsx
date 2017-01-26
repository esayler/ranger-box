import React from 'react'
import { render } from 'enzyme'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import chaiJsx from 'chai-jsx'

import Button from './Button'

chai.use(chaiEnzyme())
chai.use(chaiJsx)

var expect = chai.expect
// let should = chai.should()

describe('<Button />', () => {
  it.skip('should render text', () => {
    const wrapper = render(<Button />)
    expect(wrapper.find('h1')).to.contain.text('button')
  })
})
