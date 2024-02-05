import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel } from 'react-bootstrap'
import slide1 from './assets/bannerimages/1.jpg'
import slide2 from './assets/bannerimages/8.jpg'
import slide3 from './assets/allCourses-1.jpg'
import slide4 from './assets/bannerimages/11.jpg'

const Banner = () => {
    const imageStyle = {
        
        maxHeight: '80vh'
       
      };
    return (
        <Carousel >
            <Carousel.Item >
                <img
                    className="d-block w-100  "
                    src={slide1}
                    alt="First slide"
                    style={imageStyle}
                    
                />
                <Carousel.Caption>
                    <h3 style={{color:'white'}}>The greatest wealth is health</h3>
                    <p style={{color:'white'}}>Upto 30% off on all courses</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide2}
                    alt="Second slide"
                    style={imageStyle}
                />

                <Carousel.Caption>
                    <h3 style={{color:'white'}}>The groundwork for all happiness is good health</h3>
                    <p style={{color:'white'}}>The Biggest Sale</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide3}
                    alt="Third slide"
                    style={imageStyle}
                />

                <Carousel.Caption>
                    <h3 >A healthy outside starts from the inside</h3>
                    <p>Get your health expert today!!</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide4}
                    alt="Fourth slide"
                    style={imageStyle}
                />

                <Carousel.Caption>
                    <h3>Good health and good sense are two of life's greatest blessings</h3>
                    <p>Upto 40% off on all products</p>
                </Carousel.Caption>
            </Carousel.Item>
           
        </Carousel>
    )
}

export default Banner