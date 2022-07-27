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
    const transition = {
        type: 'spring', duration: 3
    }
    return (
        <div className='hero'>
            <div className="blur hero-blur"></div>
            <div className="blur blur-f"></div>
            <div className="left-h">
                <Header />
                {/* The Best Add part */}
                <div className="the-best-add">
                    <motion.div className='' initial={{ left: "255px" }}
                        whileInView={{ left: "8px" }}
                        transition={{ ...transition, type: "tween" }}
                    ></motion.div>
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
                {/* experience figures */}
                <div className="figures">
                    <div>
                        <span>
                            <NumberCounter end={140} start={100} delay={4} preFix="+" />
                        </span>
                        <span>expert coaches</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter end={978} start={878} delay={4} preFix="+" />
                        </span>
                        <span>Members joined</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter end={50} delay={2} preFix="+" />
                        </span>
                        <span>fitness programs</span>
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
                <motion.div
                    initial={{ right: "-1rem" }}
                    whileInView={{ right: "4rem" }}
                    transition={transition}
                    className="heart-rate"
                >
                    <img src={Heart} alt="" className='' />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>
                {/* hero iamge */}
                <img src={hero_image1} alt="" className='hero-image' />
                <motion.img
                    initial={{ right: "11rem" }}
                    whileInView={{ right: "20rem" }}
                    transition={transition}
                    className="hero-image-back"
                    src={hero_image_back}
                    alt=""
                />
                {/* calories */}
                <motion.div
                    initial={{ right: "32rem" }}
                    whileInView={{ right: "28rem" }}
                    transition={transition}
                    className="calories"
                >
                    <img src={Calories} alt="" />
                    <div>
                        <span>Calories burned</span>
                        <span>220 kcal</span>

                    </div>
                </motion.div>
                {/* clock */}
                <motion.div
                    initial={{ right: "11rem" }}
                    whileInView={{ right: "35rem" }}
                    transition={transition}
                    className="clock-time">
                    <img src={Clock} alt="" />
                    <div>
                        <span>Time</span>
                        <span>30 sec</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero
