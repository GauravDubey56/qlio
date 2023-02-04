import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/header.css'
import '../assets/styles/index.css'
function Landing() {
  return (
    <section className="sec1">
      <div className="row">
        <div className="col-lg-6 sec1Left">
          <h2>Taking overcrowded public queues,  <span className="headMain"><br /> to a hassle-free virtual platform with Qlio</span></h2>
          <div className="ctaBtn">

            <Link to="/queue/create" className="subBtn creBtn">Create a new Queue</Link>
            <Link to="/queue/join" className="subBtn">Join a Queue</Link>
          </div>
        </div>
        <div className="col-lg-6 sec1Right">
          <br />
          <img src={require('../assets/icon.png')} width="120%" />
        </div>
      </div>
    </section>
  )
}

export default Landing