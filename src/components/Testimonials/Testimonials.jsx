import React from 'react'
import './Testimonials.css'
import person from '../../assets/images/testimonial-pic.jpeg'
const Testimonials = () => {
  return (
    <div className='testimonial-section'>
      <div className="testimonial-heading">Testimonials</div>
      <div className="testimonial1">PathPlanPro has been an invaluable resource for me. The step-by-step roadmaps have helped me learn new technologies and skills in the field of Information Technology with ease.</div>
      <div className="testimonial-image">
        <img src={person} alt="" />
        <div className="name">Aditi Kapoor</div>
        <div className="designation">Student,IIT Kharagpur</div>
      </div>
    </div>
  )
}

export default Testimonials