import React from 'react'
import doggo from './img/adopt-dog.jpg'
import { Link } from 'react-router-dom'

export default function Landing(props) {
  return (
    <div className='landing'>
      <img alt='adoption process' src={doggo} />
      <h2>Adopt a new friend</h2>
      <p>Welcome to Petful, your one stop shop to adopting a cat or a dog.</p>
      <p>Potential adopters join our queue, and are able to watch in real time as pets are matched up with their new owners.</p>
      <p>When you join the queue, you'll wait until you are currently up.  Once it's your turn to pick, Petful will show you two animals.  It's then up to you to choose who you'll take home.</p>
      
      <Link to={'/adopt'}><button>Lets adopt a Pet</button></Link>
    </div>
  )
}