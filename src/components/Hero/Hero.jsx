//rafce (ES7 Extension)
import React from 'react';
import Header from '../Header/Header';
import './Hero.css';

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
            <div className="right-h"></div>
        </div>
    )
}

export default Hero
