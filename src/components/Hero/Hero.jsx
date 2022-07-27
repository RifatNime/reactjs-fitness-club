//rafce (ES7 Extension)
import React from 'react';
import Header from '../Header/Header';
import './Hero.css';
import hero_image1 from "../../assets/hero-image1.png"
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import Clock from "../../assets/clock.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";
import { Link } from 'react-scroll'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="left-h">
                <Header />
                {/* The Best Add part */}
                <div className="the-best-add">
                    <div className=''></div>
                    <span className=''>JOIN! THE BEST FITNESS CLUB IN THE TOWN</span>
                </div>
                {/* The hero Heading */}
                <div className="hero-text">
                    <div className=''>
                        <span className='stroke-text'>Shape </span>
                        <span className=''>Your Body</span>
                    </div>
                    <div><span>
                        Challenge yourself</span></div>
                    <div><span>
                        In here we will help you to shape and build your ideal body and live up your life to fullest.
                    </span></div>

                </div>
                {/* figures */}
                <div className="figures">

                    <div className=''>
                        <span>+ 140</span>
                        <span>Expert Coaches</span>
                    </div>
                    <div className=''>
                        <span>+ 978</span>
                        <span>Members Joined</span>
                    </div>
                    <div className=''>
                        <span>+ 50</span>
                        <span>Fitness Programs</span>
                    </div>
                </div>
                {/* hero buttons */}
                <div className="hero-buttons">
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn More</button>
                </div>
            </div>
            <div className="right-h">
                <button className='btn'>Join Now!</button>
                <div className="heart-rate">
                    <img src={Heart} alt="" className='' />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </div>
                {/* hero iamge */}
                <img src={hero_image1} alt="" className='hero-image' />
                <img src={hero_image_back} alt="" className='hero-image-back' />
                {/* calories */}
                <div className="calories">
                    <img src={Calories} alt="" />
                    <div>
                        <span>Calories burned</span>
                        <span>220 kcal</span>
                    </div>
                </div>
                {/* clock */}
                <div className="clock-time">
                    <img src={Clock} alt="" />
                    <div>
                        <span>Time</span>
                        <span>30 sec</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
