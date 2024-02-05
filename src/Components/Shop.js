import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import slide1 from './assets/shop-1.jpg'
import slide2 from './assets/shop-2.jpg'
import slide3 from './assets/shop-3.jpg'
import slide4 from './assets/shop-4.jpg'
import slide5 from './assets/shop-5.jpg'
import slide6 from './assets/shop-6.jpg'

const Shop = () => {
  return (
    <div>
        
<Navbar/>
<h3 style={{marginLeft:'45%',marginBottom:'2%',marginTop:'2%'}}>Products</h3>
<div className="row row-cols-1 row-cols-md-3 g-4 w-75" style={{marginLeft:'12%',marginBottom:'4%'}}>
  <div className="col">
    <div className="card h-100">
      <img src={slide1} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Water Bottle</h5>
        <p className="card-text">Water Bootle to keep you hydrated</p>
      </div>
      <button type="submit" className="btn btn-primary">More Details</button>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={slide2} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Skipping Rope</h5>
        <p className="card-text">Water Bootle to keep you hydrated</p>
      </div>
      <button type="submit" className="btn btn-primary">More Details</button>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={slide3} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">dumbbell</h5>
        <p className="card-text"> dumbbell is a type of fitness equipment commonly used in strength training.</p>
      </div>
      <button type="submit" className="btn btn-primary">More Details</button>
    </div>
  </div>
</div>


<div className="row row-cols-1 row-cols-md-3 g-4 w-75"style={{marginLeft:'12%'}}>
  <div className="col">
    <div className="card h-100">
      <img src={slide4} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Water Bottle</h5>
        <p className="card-text">Water Bootle to keep you hydrated</p>
      </div>
      <button type="submit" className="btn btn-primary">More Details</button>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={slide5} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Shoes</h5>
        <p className="card-text">Shoes are a type of footwear designed to provide protection and comfort to the feet </p>
      </div>
      <button type="submit" className="btn btn-primary">More Details</button>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={slide6} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Gym wear</h5>
        <p className="card-text">is a type of clothing specifically designed for individuals engaging in physical activitiesnes or workouts at the gym</p>
      </div>
      <button type="submit" className="btn btn-primary">More Details</button>
    </div>
  </div>
</div>
<Footer/>
    </div>
  )
}

export default Shop