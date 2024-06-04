import React from 'react'
import './Teams.css'
import Hareesh from '../../assets/team-images/Hareesh.png'
const Teams = () => {
  return (
    <>
    <div className='teams'>
        <div className="teams-heading">Our Team</div>
      <div className="teams-section">
        <div className="teams-image">
          <img src={Hareesh} alt="" />
        </div>
          <div className="name">Hareeshravi S</div>
          <div className="designation">Project Manager & Lead Developer of PathPlanPro</div>
      </div>
    </div>
    </>
  )
}

export default Teams