import React from 'react'
import './Explore.css'
const Explore = () => {
  return (
    <>
      <div className='explore-heading'>Chart Your Course: Pick Your Role or Master Your Skills!</div>
      <div className="explore-section">
            <div className="splitter">
                <div className="roles">
                    <p>Discover your role and step into a position that truly fits you. Uncover the perfect match for your skills and ambitions.</p>
                    <button className='role-button'>Roles</button>
                </div>
                <hr style={{ border: '3px solid black',height:'400px',borderRadius:'20px' }} />
                <div className="skills">
                    <p>Sharpen your skills and stay ahead in your field. Invest in continuous learning to enhance your expertise and achieve excellence.</p>
                    <button className='skill-button'>Skills</button>
                </div>
            </div>
    </div>
    </>
  )
}

export default Explore