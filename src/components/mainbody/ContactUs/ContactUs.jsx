import './contactUs.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useEffect } from 'react';

function ContactUs() {
   useEffect(()=>{

        document.title="contact"
      })
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        console.log("data",form.current)

        emailjs.sendForm('service_e5hgeim', 'template_vimpmj8', form.current, 'thMy18lC454Pc7vQp')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="contact-wraper">
            <div className="header-image">
                <img src='/images/download.jfif' alt="Header" />
                <h1>CONTACT US</h1>
            </div>
            <h1 className='conversation-text'>lets start conversation</h1>
            <div className="bottom-section">
                <div className="left-section">
                    <div className="heading-text">
                        <h1>contact info</h1>
                    </div>
                    <div className="left-section-content">
                        <div className="single-content">
                            <img src='./images/address.png' className='contact-image' alt="Address" /><h1>sardheri charsadha</h1>
                        </div>
                        <div className="single-content">
                            <img src='./images/email.png' className='contact-image' alt="Email" /><h1>salman@gmail.com</h1>
                        </div>
                        <div className="single-content">
                            <img src='./images/call.png' className='contact-image' alt="Phone" /><h1>03433499933</h1>
                        </div>
                        <div className="single-content">
                            <img src='./images/insta.png' className='contact-image' alt="Instagram" /><h1>salmaninsta1222</h1>
                        </div>
                    </div>
                </div>
                <div className="contact-form">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="input-row">
                            <label>
                                First Name:
                                <input type="text" className="line-input" placeholder="First Name" name="user_name" />
                            </label>
                            <label>
                                Last Name:
                                <input type="text" className="line-input" placeholder="Last Name" name="user_last_name" />
                            </label>
                        </div>
                        <div className="input-row">
                            <label>
                                Email:
                                <input type="email" className="line-input" placeholder="Email" name="user_email" />
                            </label>
                            <label>
                                Mobile Number:
                                <input type="tel" className="line-input" placeholder="Mobile Number" name="user_mobile" />
                            </label>
                        </div>
                        <div className="input-row">
                            <label>
                                Message:
                                <textarea className="line-input" placeholder="Write your message here..." name="message"></textarea>
                            </label>
                        </div>
                        <input type="submit" className='sent-button' value='send' />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
