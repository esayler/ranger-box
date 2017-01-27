import React from 'react'
import { render } from 'enzyme'
import JokeList from './JokeList'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import chaiJsx from 'chai-jsx'
import stubResponseJSON from '../app/stub-api-response'

chai.use(chaiEnzyme())
chai.use(chaiJsx)

var expect = chai.expect
// let should = chai.should()

describe('<JokeList />', () => {
  const response = stubResponseJSON
  const data = response.value

  let wrapper

  beforeEach(() => {
    wrapper = render(
      <JokeList jokes={data} />
    )
  })

  it('should render as a div', () => {
    const jokeList = wrapper.find('.joke-list')
    expect(jokeList).to.exist
  })

  it('should render the number of Jokes in data', () => {
    const jokeList = wrapper.find('.joke-list')
    expect(jokeList).to.have.exactly(5).descendants('.joke-box')
  })
})
