import React from 'react'
import './Instructor.css'
import instructor_photo from './assets/Instructor.jpg'
const Instructor = () => {
  return (
    <div style={{backgroundColor:'#000000'}}>

<section className="section about-section " id="about">
  <div className="container">
    <div className="row align-items-center justify-content-around flex-row-reverse">
      <div className="col-lg-6">
        <div className="about-text">
          <h3 className="" style={{color:'#B4D4FF'}}>Become a Student</h3>
          <h4 className="" style={{color:'#B4D4FF'}}></h4>
          <p style={{color:'#B4D4FF'}}>Instructors from around the world teach millions of learners . We provide the tools and skills to teach what you love</p>
          
          <div className="btn-bar">
            <a className="px-btn theme" href="http://localhost:3000/product-type/mobile">Start Learning Today </a>
            
          </div>
        </div>
      </div>
      <div className="col-lg-5 text-center">
        <div className="about-img">
          <img src={instructor_photo } />
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Instructor