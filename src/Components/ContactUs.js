import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
const ContactUs = () => {
  return (
    <>
    <Navbar/>
    <form className="row g-3 p-5 m-5">
    <h3>Contact Us</h3>
  <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label">Name</label>
    <input type="text" className="form-control" id="inputEmail4" />
  </div>
  <div className="col-md-6">
    <label htmlFor="inputPassword4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputPassword4" />
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress2" className="form-label">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
  </div>
  <div className="col-md-6">
    <label htmlFor="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" id="inputCity" />
  </div>
  <div className="col-md-4">
    <label htmlFor="inputState" className="form-label">State</label>
    <input type="text" className="form-control" id="inputZip" />
  </div>
  
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck" />
      <label className="form-check-label" htmlFor="gridCheck">
        Terma and conditions
      </label>
    </div>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Submit</button>
  </div>
</form>
<Footer/>
</>
  )
}

export default ContactUs