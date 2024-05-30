import React from 'react'
import  './Features.css'
import Programmer from '../../assets/images/programmer.png'
const Features = () => {
  return (
    <div className='features-section'>
        <div className="split">
            <div className="feature-content">
                <div className="content1">Unlock New IT Skills
                <p>Discover a wide range of IT roles and skills through our comprehensive<br/> roadmap guides.</p>
                </div>
                <div className="content2">Personalized Learning Paths
                <p>Tailor your learning experience with customized roadmaps that fit your <br/>goals and interests.</p>
                </div>
                <div className="content3">Track Your Progress
                <p>Stay motivated and monitor your growth as you complete each milestone <br/>on your learning journey.</p>
                </div>
            </div>
            <div className="feature-image">
                <img src={Programmer} alt="feature image" />
            </div>
        </div>
    </div>
  )
}

export default Features