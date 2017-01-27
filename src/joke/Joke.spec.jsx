import React from 'react'
import { mount } from 'enzyme'
import JokeList from '../joke-list/JokeList'

import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import chaiJsx from 'chai-jsx'
import stubResponseJSON from '../app/stub-api-response'
// import stubFavoritesJSON from '../app/stub-favorites'

chai.use(chaiEnzyme())
chai.use(chaiJsx)

var expect = chai.expect

describe('<Joke />', () => {
  const response = stubResponseJSON
  const data = response.value

  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <JokeList jokes={data} />
    )
  })

  it('should render as a div', () => {
    const jokeBox = wrapper.find('.joke-box').first()
    expect(jokeBox).to.be.present()
  })

  it('should render Joke data text', () => {
    const jokeBox = wrapper.find('.joke-box--text').first()
    expect(jokeBox).to.be.present()
    expect(jokeBox).to.have.text(data[0]['joke'])
  })

  it('should render Joke favorite button', () => {
    const favoriteBtn = wrapper.find('.btn .btn-star').first()
    expect(favoriteBtn).to.be.present()
  })

  it('favorite button should not be a yellow star icon if not favorited', () => {
    const starIcon = wrapper.find('i').first()

    expect(starIcon).to.be.present()
    expect(starIcon).to.not.have.have.className('starred')
  })

  it.skip('favorite button should be a yellow star icon if favorited', () => {
    // stub favorites
    const starIcon = wrapper.find('i').first()

    expect(starIcon).to.be.present()
    expect(starIcon).to.not.have.have.className('starred')
  })
})
