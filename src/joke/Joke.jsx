import React from 'react'

const Joke = (props) => {

  return (
    <div className={props.className}>
      {/* <p>{props.data ? props.data.id : ' '}<br/></p> */}
      <p>{props.data ? props.data.joke : 'Getting Joke...'}</p>
    </div>
  )
}

export default Joke
