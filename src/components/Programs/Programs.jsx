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
            {/* programs-categories */}
            <div className="program-categories">
                {programsData.map((program) => (
                    <motion.div
                        whileHover={{ background: 'var(--planCard)', cursor: 'pointer' }}
                        transition={{ type: 'spring' }}
                        className="category">
                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details}</span>
                        <div className="join-now">
                            <span>Join Now</span>
                            <img src={RightArrow} alt="" className="arrow-1"/>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Programs;
