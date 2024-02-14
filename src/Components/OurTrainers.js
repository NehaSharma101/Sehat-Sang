import React, { useState } from 'react';
import Navbar from './Navbar'
import { auth, db } from '../FirebaseConfigs/firebaseConfig'
import Footer from './Footer'
import { Button, Card, Col, Row } from 'react-bootstrap';
import trainer1 from './assets/Trainer1.jpeg'
import trainer2 from './assets/trainer2.jpeg'
import trainer3 from './assets/trainer3.jpg'
import { collection, getDocs, query, where, doc, updateDoc } from 'firebase/firestore'
const OurTrainers = () => {
 const collectionRefs=collection(db,"trainers")
 const [trainer,setTrainer]=useState([]);
 const querySnapshot=getDocs(collectionRefs)
 const callPhoneNumber =(phoneNumber)=>{
   window.location.href = 'tel:' + phoneNumber;
 }
 const sendWhatsapp=(phoneNumber)=>{
   const message = 'Hello, I am contacting you through Sehat Sang!!!'; 
   const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
   window.open(whatsappLink)
 }
 const sendEmail=(emailAddress)=>{
   window.location.href = 'mailto:' + emailAddress;
 }
 
 return (
   <>
   <Navbar/>
  <div style={{backgroundColor: '#000000'}}><section className=''>
   <div className="row d-flex justify-content-center">
     <div className="col-md-10 col-xl-8 text-center">
       <h3 className="" style={{color: '#B4D4FF',fontSize:'35px'}}>Our Partners</h3>
       {/* <p className="pb-2 mb-md-5 pb-md-0">
       </p> */}
     </div>
   </div>
   <div className="row text-center d-flex align-items-stretch m-5">
     <div className="col-md-4  mb-md-0 d-flex align-items-stretch">
       <div className="card testimonial-card">
         <div className="card-up" style={{backgroundColor: '#9d789b'}} />
         <div className="avatar mx-auto bg-white m-3">
           <img src={trainer1} className="rounded-circle img-fluid" />
         </div>
         <div className="card-body" style={{backgroundColor: '#B4D4FF'}}>
           <h4 className="mb-4 text-black">Dr Jagdambe Singh Rathore</h4>
           <hr />
           <p className="dark-grey-text mt-4 text-black" >
             <i className="fas fa-quote-left pe-2 " /> MD medicine at SDH degana<br/>
             {/* <strong>Email:</strong>jsrathore367@gmail.com<br/>
             <strong>Contact Number:</strong>8764327064 */}
           </p>
           <Button style={{margin:'2px'}} onClick={()=>callPhoneNumber(+918764327064)}>Call</Button>
           <Button style={{margin:'2px'}} onClick={()=>sendWhatsapp(+918764327064)}>Whatsapp</Button>
           <Button style={{margin:'2px'}} onClick={()=>sendEmail('')}>Email</Button>
         </div>
       </div>
     </div>
     <div className="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch">
       <div className="card testimonial-card">
         <div className="card-up" style={{backgroundColor: '#7a81a8'}} />
         <div className="avatar mx-auto bg-white m-3">
           <img src={trainer2} className="rounded-circle img-fluid" />
         </div>
         <div className="card-body" style={{backgroundColor: '#B4D4FF'}}>
           <h4 className="mb-4 text-black">Dr Mukut Rathore</h4>
           <hr />
           <p className="dark-grey-text mt-4 text-black" >
             <i className="fas fa-quote-left pe-2 " /> resident doctor in MD anaesthesia at JLN medical College ajmer<br/>
             {/* <strong>Email:</strong>mukut.01@gmail.com */}
             {/* <strong>Contact Number:</strong>8764327064 */}
           </p>
           <Button style={{margin:'2px'}} onClick={()=>callPhoneNumber(+91123456789)}>Call</Button>
           <Button style={{margin:'2px'}} onClick={()=>sendWhatsapp(+91123456789)}>Whatsapp</Button>
           <Button style={{margin:'2px'}} onClick={()=>sendEmail('mukut.01@gmail.com')}>Email</Button>
         </div>
       </div>
     </div>
     <div className="col-md-4 mb-0 d-flex align-items-stretch">
       <div className="card testimonial-card">
         <div className="card-up" style={{backgroundColor: '#6d5b98'}} />
         <div className="avatar mx-auto bg-white m-3">
           <img src={trainer3} className="rounded-circle img-fluid" />
         </div>
         <div className="card-body" style={{backgroundColor: '#B4D4FF'}}>
           <h4 className="mb-4 text-black"> Lakhotia Manoj</h4>
           <hr />
           <p className="dark-grey-text mt-4 text-black" >
             <i className="fas fa-quote-left pe-2 " /> Dr. Sampurnanand Medical College, Jodhpur, Rajasthan, India. <br/>
             {/* <strong>Email:</strong>Lakhotia7089@gmail.com<br/> */}
             {/* <strong>Contact Number:</strong>8764327064 */}
           </p> 
           <Button style={{margin:'2px'}} onClick={()=>callPhoneNumber(+919602382272)}>Call</Button>
           <Button style={{margin:'2px'}} onClick={()=>sendWhatsapp(+919602382272)}>Whatsapp</Button>
           <Button style={{margin:'2px'}} onClick={()=>sendEmail("Lakhotia7089@gmail.com")}>Email</Button>
         </div>
       </div>
     </div>
   </div>
 </section></div>
 <div className="text-center ">
       <h3 className="" style={{color: 'black',fontSize:'35px'}}>Our Partner Gyms</h3>
       {/* <p className="pb-2 mb-md-5 pb-md-0">
       </p> */}
     </div>
 <div className="container mt-5 " style={{ color: '#ffffff' }}>
     <h2 className="text-center mb-4" style={{ color: '#ffffff' }}>Gym Details</h2>
     <div className="row row-cols-1 row-cols-md-3 g-4">
       <div className="col">
         <div className="card" style={{ backgroundColor: '#000000', color: '#ffffff' }}>
           <div className="card-body">
             <h5 className="card-title">Shree Ji GYM</h5>
             <p className="card-text">Address: 32, Gokulpura, Jaipur, Rajasthan 302032</p>
             <p className="card-text">Contact: 082093 05617</p>
           </div>
         </div>
       </div>
       <div className="col">
         <div className="card" style={{ backgroundColor: '#000000', color: '#ffffff' }}>
           <div className="card-body">
             <h5 className="card-title">Fitness Pulse Gym</h5>
             <p className="card-text">Address: Kalwar Rd, Suraj Nagar, Jhotwara, Jaipur, Rajasthan 302012</p>
             <p className="card-text">Contact: 9887000058</p>
           </div>
         </div>
       </div>
       <div className="col">
         <div className="card" style={{ backgroundColor: '#000000', color: '#ffffff' }}>
           <div className="card-body">
             <h5 className="card-title">CrossFit Gym</h5>
             <p className="card-text">Address: A-9, Janta Store Cir, Bapu Nagar, Jaipur, Rajasthan 302015</p>
             <p className="card-text">Contact: 7976013905</p>
           </div>
         </div>
       </div>
     </div>
   </div>
 <Footer/>
 </>
 )
}

export default OurTrainers
