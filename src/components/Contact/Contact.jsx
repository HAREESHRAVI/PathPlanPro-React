import React from 'react'
import './Contact.css'
import { IoIosMail } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Check if any of the required fields are empty
    if (!name || !email || !message) {
        alert("Please enter your details.");
        return;
    }
    
        formData.append("access_key", "eef7dee7-0d48-4278-b847-85219127bc24");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
          event.target.reset();
          alert("Your response has been recorded");
        }
      };
    
  return (
    <div id='contact' className="contact">
        <div className="contact-title">
            <h1>Contact</h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Connect</h1>
                <p>We'd love to hear from you! Whether you have a question or feedback, don't hesitate to reach out. Feel free to drop a message using the form or connect with me via email or social media. We look forward to connecting with you.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                    <a target="_blank" href="https://mail.google.com">
                        <IoIosMail className='contacts-logo'/>
                    </a>
                    <a target="_blank" href="https://mail.google.com">
                        pathplanpro@gmail.com
                    </a>
                    </div>
                    <div className="contact-detail">
                    <a target="_blank" href="https://github.com/HAREESHRAVI/PathPlanPro-React">
                        <IoLogoGithub className='contacts-logo'/>
                    </a><a target="_blank" href="https://github.com/HAREESHRAVI/PathPlanPro-React">Github</a>
                    </div>
                    <div className="contact-detail">
                    <FaLocationDot className='contacts-logo'/><a>Tamilnadu,India</a>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit}className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name'/>
                <label htmlFor="email">Your Email</label>
                <input type="text" placeholder='Enter your Email' name='email'/>
                <label htmlFor="">Write your message here</label>
                <textarea name="message"  rows="8" placeholder="Enter your text"></textarea>
                <button type="submit"className="contact-submit">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact