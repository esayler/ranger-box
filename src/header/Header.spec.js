import React from 'react'
import { render, shallow, mount } from 'enzyme'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import chaiJsx from 'chai-jsx'

import Header from './Header'

chai.use(chaiEnzyme())
chai.use(chaiJsx)

expect = chai.expect

describe('<Header />', () => {
  it('should render text', () => {
    const wrapper = shallow(<Header name=''/>)
    expect(wrapper.find('h1')).to.contain.text('Joke Machine')
  })
})
