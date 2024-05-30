import React from 'react'
import './Explore.css'
const Explore = () => {
  return (
    <>
      <div className='explore-heading'>Chart Your Course: Pick Your Role or Master Your Skills!</div>
      <div className="explore-section">
            <div className="splitter">
                <div className="roles">
                    <p>Discover your role.</p>
                    <button className='role-button'>Roles</button>
                </div>
                <div className="skills">
                    <p>Sharpen your skills</p>
                    <button className='skill-button'>Skills</button>
                </div>
            </div>
    </div>
    </>
  )
}

export default Explore