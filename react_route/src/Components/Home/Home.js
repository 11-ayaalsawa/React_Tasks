import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Home(props){
    console.log(props.name,"test home page");
    return(
        <>
        <Carousel className='slider' style={{color: 'black'}}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000"
            alt="First slide"
          />
          <Carousel.Caption>
          <h1 style={{color: 'black'}}>Welcome {props.name}</h1>
        <h1 style={{color: 'black'}}>your Email is :{props.Email}</h1>
        <h1 style={{color: 'black'}}>your Phone Number is :{props.PhoneNumber}</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.freecodecamp.org/news/content/images/2021/06/w-qjCHPZbeXCQ-unsplash.jpg"
            alt="Second slide"
          />
      
          <Carousel.Caption>
          <h1 style={{color: 'black'}}>Welcome {props.name}</h1>
        <h1 style={{color: 'black'}}>your Email is :{props.Email}</h1>
        <h1 style={{color: 'black'}}>your Phone Number is :{props.PhoneNumber}</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-photo/top-view-background-beautiful-white-grey-brown-cream-blue-background_140725-72219.jpg?w=2000"
            alt="Third slide"
          />
      
          <Carousel.Caption>
          <h1 style={{color: 'black'}}>Welcome {props.name}</h1>
        <h1 style={{color: 'black'}}>your Email is :{props.Email}</h1>
        <h1 style={{color: 'black'}}>your Phone Number is :{props.PhoneNumber}</h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
       
 
</>
    )
}

export default Home;