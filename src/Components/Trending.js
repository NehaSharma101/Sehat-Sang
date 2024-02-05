
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import slide1 from './assets/trending-1.jpg'
import slide2 from './assets/trending-2.jpg'
import slide3 from './assets/pop-1.jpg'
import slide4 from './assets/pop-2.jpg'
const Allcourses = () => {
  return (
    <div>
      <Navbar/>
      <h3 style={{marginLeft:'45%',marginBottom:'2%',marginTop:'2%'}}>Trending</h3>
<div className="row row-cols-1 row-cols-md-2 g-5  w-75" style={{marginLeft:'12%'}}>
  <div className="col">
    <div className="card ">
      <img src={slide1} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Nutrition and Diet</h5>
        <p className="card-text">Create Muscle Growth & Fat Loss Meal  and lead a better life by intaking nutritious food</p>
        <button type="submit" className="btn btn-primary">More Details</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={slide2}  className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Sports Nutrition for Athletes and Fitness Enthusiasts </h5>
        <p className="card-text">Create Muscle Growth & Fat Loss Meal  and lead a better life by intaking nutritious food</p>
        <button type="submit" className="btn btn-primary">More Details</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={slide3}  className="card-img-top" alt="..." />
      <div className="card-body">
      <h5 className="card-title">Sports Nutrition for Athletes and Fitness Enthusiasts </h5>
        <p className="card-text">Create Muscle Growth & Fat Loss Meal  and lead a better life by intaking nutritious food</p>
        <button type="submit" className="btn btn-primary">More Details</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={slide4}  className="card-img-top" alt="..." />
      <div className="card-body">
      <h5 className="card-title">Sports Nutrition for Athletes and Fitness Enthusiasts </h5>
        <p className="card-text">Create Muscle Growth & Fat Loss Meal  and lead a better life by intaking nutritious food</p>
        <button type="submit" className="btn btn-primary">More Details</button>
      </div>
    </div>
  </div>
</div>
<Footer/>
</div>

    
  )
}

export default Allcourses
