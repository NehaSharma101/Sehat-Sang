import React from 'react'

const Footer = () => {
  return (
    <>
    <div>
  <footer className="text-center text-lg-start bg-body-black text-muted mt-4" style={{backgroundColor: '#000000'}}>
    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
      <div className="me-5 d-none d-lg-block">
        <span>Get connected with us on social networks:</span>
      </div>
      <div>
        <a href className="me-4 text-reset">
          <i className="fab fa-facebook-f" />
        </a>
        <a href className="me-4 text-reset">
          <i className="fab fa-twitter" />
        </a>
        <a href className="me-4 text-reset">
          <i className="fab fa-google" />
        </a>
        <a href className="me-4 text-reset">
          <i className="fab fa-instagram" />
        </a>
        <a href className="me-4 text-reset">
          <i className="fab fa-linkedin" />
        </a>
        <a href className="me-4 text-reset">
          <i className="fab fa-github" />
        </a>
      </div>
      {/* Right */}
    </section>
    {/* Section: Social media */}
    {/* Section: Links  */}
    <section className>
      <div className="container text-center text-md-start mt-5">
        {/* Grid row */}
        <div className="row mt-3">
          {/* Grid column */}
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            {/* Content */}
            <h6 className="text-uppercase fw-bold mb-4">
              <i className="fas fa-gem me-3" />Sehat sang
            </h6>
            <p>
              Sehat Sang your nutrition expert.Get Your Course Now!!
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">
              Products
            </h6>
            <p>
              <a href="#!" className="text-reset">All Course</a>
            </p>
            <p>
              <a href="#!" className="text-reset">Popular Course</a>
            </p>
            <p>
              <a href="#!" className="text-reset">Trending Course</a>
            </p>
            <p>
              <a href="#!" className="text-reset">Shop</a>
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">
              Useful links
            </h6>
            <p>
              <a href="#!" className="text-reset">Pricing</a>
            </p>
            <p>
              <a href="#!" className="text-reset">Settings</a>
            </p>
            <p>
              <a href="#!" className="text-reset">Orders</a>
            </p>
            <p>
              <a href="#!" className="text-reset">Help</a>
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p><i className="fas fa-home me-3" /> Jaipur,Rajasthan</p>
            <p>
              <i className="fas fa-envelope me-3" />
              info@example.com
            </p>
            <p><i className="fas fa-phone me-3" /> +91 6367297578</p>
            <p><i className="fas fa-print me-3" /> +91 7849838090</p>
          </div>
          {/* Grid column */}
        </div>
        {/* Grid row */}
      </div>
    </section>
    {/* Section: Links  */}
    {/* Copyright */}
    <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
      © 2021 Copyright:
      <a className="text-reset fw-bold" href="https://mdbootstrap.com/">Sehat sang</a>
    </div>
    {/* Copyright */}
  </footer>
  {/* Footer */}
  

</div>
</>
  )}
export default Footer