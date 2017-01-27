import React from 'react'
import { render } from 'enzyme'
import Home from './Home'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import chaiJsx from 'chai-jsx'

chai.use(chaiEnzyme())
chai.use(chaiJsx)

var expect = chai.expect
// let should = chai.should()

describe('<Home />', () => {
  it('should render text message "Click Get Jokes!"', () => {
    const wrapper = render(<Home />)
    expect(wrapper).to.contain.text('Click Get Jokes!')
  })
})
