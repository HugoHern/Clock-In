import React from 'react'
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className='container'>
        <div className='welcome-body'>
            <h1>Welcome User!</h1>
            <p> welcome to the best app to keep track of your hours!</p>
            <p>Click below to login!</p>
            <br></br>
            <Link to="/login">Login</Link>
        </div>
    </div>
  )
}

export default Home