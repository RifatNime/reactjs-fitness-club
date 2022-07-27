import React from "react";
import "./Testimonials.css";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import { testimonialsData } from "../../data/testimonialsData";
import { useState } from "react";
import { motion } from "framer-motion";

const Testimonials = () => {

    const [selected, setSelected] = useState(0);
    const tLenght = testimonialsData.length;

  return (
    <div className="testimonials">
        <div className="left-t">
            <span className="">Testimonials</span>
            <span className="stroke-text">What</span>
            <span className="">Say About Us</span>
            <span>
                {testimonialsData[selected].review}
            </span>
            <span>
                <span style={{color: 'var(--orange)',}}>{testimonialsData[selected].name}</span>
                <span className=""> - {testimonialsData[selected].status}</span>
            </span>
        </div>
        <div className="right-t">
            <div></div>
            <div></div>
            <img src={testimonialsData[selected].image} alt="" />
            <div className="arrows">
            <img src={leftArrow} alt="" />
            <img src={rightArrow} alt="" />
            </div>
        </div>
      
    </div>
  )
}

export default Testimonials
