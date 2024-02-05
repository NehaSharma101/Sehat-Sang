import React from 'react'

const Testimonial = () => {
  return (
   <div style={{backgroundColor: '#000000'}}><section className=''>
    <div className="row d-flex justify-content-center">
      <div className="col-md-10 col-xl-8 text-center">
        <h3 className="" style={{color: '#B4D4FF',fontSize:'35px'}}>Testimonials</h3>
        {/* <p className="pb-2 mb-md-5 pb-md-0">
        </p> */}
      </div>
    </div>
    <div className="row text-center d-flex align-items-stretch m-5">
      <div className="col-md-4  mb-md-0 d-flex align-items-stretch">
        <div className="card testimonial-card">
          <div className="card-up" style={{backgroundColor: '#9d789b'}} />
          <div className="avatar mx-auto bg-white m-3">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" className="rounded-circle img-fluid" />
          </div>
          <div className="card-body" style={{backgroundColor: '#B4D4FF'}}>
            <h4 className="mb-4 text-black">Maria Smantha</h4>
            <hr />
            <p className="dark-grey-text mt-4 text-black" >
              <i className="fas fa-quote-left pe-2 " />Lorem ipsum dolor sit amet eos adipisci,
              consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch">
        <div className="card testimonial-card">
          <div className="card-up" style={{backgroundColor: '#7a81a8'}} />
          <div className="avatar mx-auto bg-white m-3">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp" className="rounded-circle img-fluid" />
          </div>
          <div className="card-body" style={{backgroundColor: '#B4D4FF'}}>
            <h4 className="mb-4 text-black">Lisa Cudrow</h4>
            <hr />
            <p className="dark-grey-text mt-4 text-black">
              <i className="fas fa-quote-left pe-2 " />Neque cupiditate assumenda in maiores
              repudi mollitia architecto.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-0 d-flex align-items-stretch">
        <div className="card testimonial-card">
          <div className="card-up" style={{backgroundColor: '#6d5b98'}} />
          <div className="avatar mx-auto bg-white m-3">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp" className="rounded-circle img-fluid" />
          </div>
          <div className="card-body" style={{backgroundColor: '#B4D4FF'}}>
            <h4 className="mb-4 text-black">John Smith</h4>
            <hr />
            <p className="dark-grey-text mt-4 text-black">
              <i className="fas fa-quote-left pe-2 " />Delectus impedit saepe officiis ab
              aliquam repellat rem unde ducimus.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default Testimonial