import React from "react";
import "./Programs.css";
import { programsData } from "../../data/programsData";
import RightArrow from '../../assets/rightArrow.png';
import { motion } from "framer-motion";

const Programs = () => {
    return (
        <div className="programs" id="programs">
            {/* header */}
            <div className="programs-header">
                <span className='stroke-text'>EXPLORE OUR</span>
                <span className=''>PROGRAMS</span>
                <span className='stroke-text'>TO SHAPE YOU</span>
            </div>
            <div className="program-categories">
                {programsData.map((program) => (
                    <div className="category">
                        {program.image}
                        {/* <img src={program.image} alt="" /> */}
                        <span className="">{program.heading}</span>
                        <span className="">{program.details}</span>
                        <div className="join-now">
                            <span>Join Now</span>
                            <img src={RightArrow} alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Programs