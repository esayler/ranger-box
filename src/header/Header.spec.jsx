import React from 'react'
import { render } from 'enzyme'
import Header from './Header'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import chaiJsx from 'chai-jsx'

chai.use(chaiEnzyme())
chai.use(chaiJsx)

var expect = chai.expect
// let should = chai.should()

describe('<Header />', () => {
  it('should render text', () => {
    const wrapper = render(<Header />)
    expect(wrapper.find('h1')).to.contain.text('Chuck Norris Joke Machine')
  })
})
