import React from 'react'
import { shallow, render } from 'enzyme'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import chaiJsx from 'chai-jsx'

import Button from './Button'

chai.use(chaiEnzyme())
chai.use(chaiJsx)

var expect = chai.expect
// let should = chai.should()

describe('<Button />', () => {
  it('should render a button', () => {
    const wrapper = render(<Button />)
    expect(wrapper).to.have.descendants('button')
  })

  it('should be disabled if passed as a prop />', () => {
    const wrapper = shallow(<Button disabled='true' />)
    expect(wrapper.find('.btn')).to.be.disabled()
  })
})
