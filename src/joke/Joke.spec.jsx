import React from 'react'
import { render } from 'enzyme'
import Joke from './Joke'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import chaiJsx from 'chai-jsx'

chai.use(chaiEnzyme())
chai.use(chaiJsx)

var expect = chai.expect
// let should = chai.should()

describe('<Joke />', () => {
  it.skip('should render text', () => {
    const wrapper = render(<Joke />)
  })
})
