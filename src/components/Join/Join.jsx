import React, { useRef } from 'react';
import './Join.css';
import emailjs from '@emailjs/browser';

const Join = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_o2yhxaf', 'template_of5wvbn', form.current, 'egxG82E_55K6AuSMt')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            form.value = ''; 
    };
    return (
        <div className='Join' id='join-us'>
            <div className="left-j">
                <hr />
                <div>
                    <span className='stroke-text'>Ready To</span>
                    <span>Level Up</span>
                </div>
                <div>
                    <span>Your Self</span>
                    <span className='stroke-text'>With Us?</span>
                </div>
            </div>
            <div className="right-j">
                <form ref={form} className="email-container" onSubmit={sendEmail}>
                    <input type="email" name='user_email' placeholder='Enter Your Email Address' />
                    <button className='btn btn-j'>Join Now</button>
                </form>
            </div>
        </div>
    )
}

export default Join
