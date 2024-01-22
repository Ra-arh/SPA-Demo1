import "./Testimonials.css"
// import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default function Testimonials(){
    const testimonialData = [
        {text1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus non nobis maxime incidunt cupiditate, assumenda architecto eaque? Impedit eveniet laboriosam eum. Laudantium omnis rerum ab, eos quae repellendus itaque amet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus non nobis maxime incidunt cupiditate, assumenda architecto eaque? Impedit eveniet laboriosam eum.", text2: "Elizabeth", text3: "Web Designer",},
        {text1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus non nobis maxime incidunt cupiditate, assumenda architecto eaque? Impedit eveniet laboriosam eum. Laudantium omnis rerum ab, eos quae repellendus itaque amet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus non nobis maxime incidunt cupiditate, assumenda architecto eaque? Impedit eveniet laboriosam eum.", text2: "Elizabeth", text3: "Web Designer",},
        {text1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus non nobis maxime incidunt cupiditate, assumenda architecto eaque? Impedit eveniet laboriosam eum. Laudantium omnis rerum ab, eos quae repellendus itaque amet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus non nobis maxime incidunt cupiditate, assumenda architecto eaque? Impedit eveniet laboriosam eum.", text2: "Elizabeth", text3: "Web Designer",},
      ]
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };  

    return(
        <div className="testmonial-container">
            <div className="testmonial-title">
                <h2>Testimonials</h2>
            </div>
            <div className="testmonial-subtitle">
                <p>What People Are Saying About Our Product.</p>
            </div>
            <div className="testimonial-slider">
            <div className="testimonial-sliderwidth">
            <Slider {...settings}>
            {testimonialData.map((testimonial, i)=>(
                <div>
                    <div className="testmonial-sliderdesc">
                        <p>{testimonial.text1}</p>
                    </div>
                    <div className="testmonial-slideruser">
                        <h3>{testimonial.text2}</h3>
                    </div>
                    <div className="testmonial-sliderprofile">    
                        <h6>{testimonial.text3}</h6>
                    </div>
                </div>    
            ))}                
            </Slider>
            </div>
            </div>
        </div>
        
    );
}

