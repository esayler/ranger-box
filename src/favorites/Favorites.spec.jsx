import React from 'react'
import { render, shallow } from 'enzyme'
import Favorites from './Favorites'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import chaiJsx from 'chai-jsx'

chai.use(chaiEnzyme())
chai.use(chaiJsx)

var expect = chai.expect

describe('<Favorites />', () => {


  it('should render text', () => {
    const wrapper = shallow(<Favorites favorites={[1,2,3]} />)
    expect
  })
})
