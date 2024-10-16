import React from 'react'
import animation from '../assets/DeathAnimation.mp4'

function Loader() {
  return (
    <div className="loader-container">
      <video autoPlay loop muted>
        <source src={animation} type="video/mp4" />
      </video>
    </div>
  )
}

export default Loader