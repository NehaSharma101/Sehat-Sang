// import React from 'react'
// import './About.css'
// const About = () => {
//   return (
//     <div className='about'>
//         <h3>About</h3>
//         <p>
//         Welcome to Sehat Sang, your holistic health and nutrition companion! At Sehat Sang, we believe that
//  health is not just the absence of illness but a state of complete physical, mental, and social well-being. 
//  In a world where information overload is common, Sehat Sang stands out as a dedicated platform committed to spreading awareness about health, nutrition, and overall well-being.<br/>

// <span>Our Mission:</span><br/>
// Sehat Sang is on a mission to bridge the gap in health education by providing accurate, accessible, 
// and comprehensive information about nutrition, fitness, and the science behind a healthy lifestyle.
//  We understand the importance of preventive healthcare and aim to empower individuals with the knowledge
//   they need to make informed decisions about their well-being.<br/>

// What Sets Us Apart:<br/>
// What makes Sehat Sang unique is our focus on education and awareness. We recognize 
// the lack of dedicated platforms providing precise information and resources about health and nutrition. 
// To address this gap, we offer a one-stop solution, bringing together nutritionists, experts, and individuals
//  passionate about promoting a culture of well-being.<br/>

//  <span>Key Features</span> :<br/>

// Educational Courses: Explore a variety of courses related to nutrition, food science, and the human anatomy to deepen your understanding of health.
// Live Interactive Sessions: Engage in live sessions tailored to your needs, covering topics such as diet plans, body composition, and fitness goals.
// Dedicated Nutrition Platform: Sehat Sang is your go-to destination for everything related to nutrition and diet plans. Find personalized guidance for your unique health requirements.
// Premium Plans: Choose from premium plans offering access to live classes, doubt sessions, and discussion forums, or basic plans with recorded content.
//  <br/><span>Why Sehat Sang?</span> <br/>
// In India, where awareness about nutrition and diets is often lacking, Sehat Sang aims to be the catalyst for positive change. We understand the challenges individuals face, from uncertified gym trainers leading to health troubles to the overall lack of clarity on health-related courses. Sehat Sang seeks to empower you with the knowledge and resources needed to navigate your health journey successfully.<br/>
// <br/>
// Join Sehat Sang, where we envision a community united by a shared commitment to a healthier, happier life. Together, let's pave the way for a future where well-being is not just a goal but a way of life.
//         </p>
//     </div>
//   )
// }

// export default About
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div style={{backgroundColor: '#000000'}}>
    <Navbar/>
    <div className="card text-center" style={{backgroundColor: '#000000'}}>
  <div style={{color: '#B4D4FF',fontWeight:'800',fontSize:'50px'}}>
    About Us
  </div>
  <div className="card-body">
    <h5 className="card-title" style={{color: '#B4D4FF'}}>Introduction</h5>
    <p className="card-text" style={{color: '#B4D4FF'}}>Welcome to Sehat Sang, your holistic health and nutrition companion! At Sehat Sang, we believe that
      health is not just the absence of illness but a state of complete physical, mental, and social well-being. 
      In a world where information overload is common, Sehat Sang stands out as a dedicated platform committed to spreading
      awareness about health, nutrition, and overall well-being.<br /><br /><br /></p>
    <h5 className="card-title" style={{color: '#B4D4FF'}}>Mission</h5>
    <p className="card-text" style={{color: '#B4D4FF'}}>Sehat Sang is on a mission to bridge the gap in health education by providing accurate, accessible, 
      and comprehensive information about nutrition, fitness, and the science behind a healthy lifestyle.
      We understand the importance of preventive healthcare and aim to empower individuals with the knowledge
      they need to make informed decisions about their well-being.<br /><br /><br /></p>
    <h5 className="card-title" style={{color: '#B4D4FF'}}>What Sets Us Apart</h5>
    <p className="card-text" style={{color: '#B4D4FF'}}>What makes Sehat Sang unique is our focus on education and awareness. We recognize 
      the lack of dedicated platforms providing precise information and resources about health and nutrition. 
      To address this gap, we offer a one-stop solution, bringing together nutritionists, experts, and individuals
      passionate about promoting a culture of well-being.<br /><br /><br /></p>
    <h5 className="card-title" style={{color: '#B4D4FF'}}>Key Features</h5>
    <p className="card-text" style={{color: '#B4D4FF'}}>Educational Courses: Explore a variety of courses related to nutrition, food science, and the human anatomy to deepen your understanding of health.
      Live Interactive Sessions: Engage in live sessions tailored to your needs, covering topics such as diet plans, body composition, and fitness goals.
      Dedicated Nutrition Platform: Sehat Sang is your go-to destination for everything related to nutrition and diet plans. Find personalized guidance for your unique health requirements.
      Premium Plans: Choose from premium plans offering access to live classes, doubt sessions, and discussion forums, or basic plans with recorded content.<br /><br /><br /></p>
    <h5 className="card-title"style={{color: '#B4D4FF'}}>Why Sehat Sang?</h5>
    <p className="card-text"style={{color: '#B4D4FF'}}>In India, where awareness about nutrition and diets is often lacking, Sehat Sang aims to be the catalyst for positive change.
      We understand the challenges individuals face, from uncertified gym trainers leading to health troubles to the overall lack of clarity on health-related courses.
      Sehat Sang seeks to empower you with the knowledge and resources needed to navigate your health journey successfully.<br />
      <br />
      Join Sehat Sang, where we envision a community united by a shared commitment to a healthier, happier life. Together, let's pave the way for a future where well-being is not just a goal but a way of life.<br /><br /><br /></p>
      {/* <button><Link to='/' style={{backgroundColor:'#B4D4FF'}}>Go Back</Link></button> */}
  </div>
</div>

<Footer/>
</div>
  )
}

export default About