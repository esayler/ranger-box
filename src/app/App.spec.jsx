import React from 'react'
import { render, mount } from 'enzyme'
import App from './App'
import Home from '../home/Home'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import chaiJsx from 'chai-jsx'

chai.use(chaiEnzyme())
chai.use(chaiJsx)

var expect = chai.expect

describe('<App />', () => {
  it('should render', () => {
    const wrapper = mount(<App children={<Home />} />)
  })

  it('renders as a <div>', () => {
    let wrapper = render(<App children={<Home />} />)
    expect(wrapper.find('div')).to.exist
  })
})
