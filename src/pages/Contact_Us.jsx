import React from 'react'
import Input from '@mui/joy/Input';

import './Contact_Us.css'



function Contact_Us() {
    const [variant, setVariant] = React.useState('solid')
    return (
        <>

        

            {/* =========== Hero Section =============== */}

            <section className="hero-sect">
                <h1>Contact Us</h1>
                <p>
                    We'd love to hear from you! Reach out with questions, prayer requests, or
                    <br />
                    just to say hello.
                </p>
            </section>

            {/* ========= Contact Section ================== */}

            <section className="contact-section">
                <div className="contact-blk">
                    <form action="" className='form'>
                        <h3>Send us a Message</h3>
                        <p>Fill out the form below and we'll get back to you as soon as possible</p>

                        <div className="names-input">
                            <label htmlFor="Name">Name
                                <br />
                                <input size="sm" placeholder="Name" />
                            </label>
                            <label htmlFor="Surname">Surname
                                <br />
                                <input size="sm" placeholder="Surname" />
                            </label>
                        </div>

                        <label htmlFor="Email">Email
                            <br />
                            <input type="text" size="sm" placeholder='Email' />
                        </label>

                        <label htmlFor="Phone"> Phone (optional)
                            <br />
                            <input size="sm" placeholder="(000) 000 0000" />
                        </label>


                        <label htmlFor="Message">
                            <p> Message </p>
                            <fieldset placeholder='Tell us how we can help you...'>

                            </fieldset>
                        </label>

                        <button color='black' variant={variant} >Send Message</button>
                    </form>
                </div>


                <div className="contact-blk">


                    <div className="get-in-touch">
                        <h4>Get in Touch</h4>
                        <div className="inTouch-blk">
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256">
                                    <path fill="#d10000" d="M128 68a36 36 0 1 0 36 36a36 36 0 0 0-36-36m0 64a28 28 0 1 1 28-28a28 28 0 0 1-28 28m0-112a84.09 84.09 0 0 0-84 84c0 30.42 14.17 62.79 41 93.62a250 250 0 0 0 40.73 37.66a4 4 0 0 0 4.58 0A250 250 0 0 0 171 197.62c26.81-30.83 41-63.2 41-93.62a84.09 84.09 0 0 0-84-84m37.1 172.23A254.6 254.6 0 0 1 128 227a254.6 254.6 0 0 1-37.1-34.81C73.15 171.8 52 139.9 52 104a76 76 0 0 1 152 0c0 35.9-21.15 67.8-38.9 88.23" />
                                </svg>
                            </div>
                            <div className="icon-text">

                                <h5>Address</h5>
                                <p>72 Marlborough rd
                                    <br />
                                    Sprinfield, Johanessburg</p>
                            </div>
                        </div>
                        <div className="inTouch-blk">
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48">
                                    <path fill="#d10000" d="M10.25 8A6.25 6.25 0 0 0 4 14.25v19.5A6.25 6.25 0 0 0 10.25 40h27.5A6.25 6.25 0 0 0 44 33.75v-19.5A6.25 6.25 0 0 0 37.75 8zM6.5 14.25a3.75 3.75 0 0 1 3.75-3.75h27.5a3.75 3.75 0 0 1 3.75 3.75v.89l-17.498 9.21L6.5 15.063zm0 3.644l16.914 8.974a1.25 1.25 0 0 0 1.168.002L41.5 17.965V33.75a3.75 3.75 0 0 1-3.75 3.75h-27.5a3.75 3.75 0 0 1-3.75-3.75z" />
                                </svg>
                            </div>
                            <div className="icon-text">
                                <h5>Email</h5>
                                <p>info@theactivechurch.org</p>
                            </div>
                        </div>
                    </div>

                    <div className="socials">
                        <h4>Follow Us</h4>
                        <div className="social-icons">
                            <div className="social-blk fb">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" viewBox="0 0 24 24">
                                    <path fill="white" fillRule="evenodd" d="M10.488 3.788A5.25 5.25 0 0 1 14.2 2.25h2.7a.75.75 0 0 1 .75.75v3.6a.75.75 0 0 1-.75.75h-2.7a.15.15 0 0 0-.15.15v1.95h2.85a.75.75 0 0 1 .728.932l-.9 3.6a.75.75 0 0 1-.728.568h-1.95V21a.75.75 0 0 1-.75.75H9.7a.75.75 0 0 1-.75-.75v-6.45H7a.75.75 0 0 1-.75-.75v-3.6A.75.75 0 0 1 7 9.45h1.95V7.5a5.25 5.25 0 0 1 1.538-3.712M14.2 3.75a3.75 3.75 0 0 0-3.75 3.75v2.7a.75.75 0 0 1-.75.75H7.75v2.1H9.7a.75.75 0 0 1 .75.75v6.45h2.1V13.8a.75.75 0 0 1 .75-.75h2.114l.525-2.1H13.3a.75.75 0 0 1-.75-.75V7.5a1.65 1.65 0 0 1 1.65-1.65h1.95v-2.1z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="social-blk ig">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256">
                                    <path fill="#fefefe" d="M128 84a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44m0 80a36 36 0 1 1 36-36a36 36 0 0 1-36 36m48-136H80a52.06 52.06 0 0 0-52 52v96a52.06 52.06 0 0 0 52 52h96a52.06 52.06 0 0 0 52-52V80a52.06 52.06 0 0 0-52-52m44 148a44.05 44.05 0 0 1-44 44H80a44.05 44.05 0 0 1-44-44V80a44.05 44.05 0 0 1 44-44h96a44.05 44.05 0 0 1 44 44ZM188 76a8 8 0 1 1-8-8a8 8 0 0 1 8 8" />
                                </svg>
                            </div>
                            <div className="social-blk yt">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                                    <path fill="white" d="M9.25 8.07a.5.5 0 0 1 .501.002l6 3.5a.5.5 0 0 1 0 .864l-6 3.5a.5.5 0 0 1-.752-.433v-7c0-.179.096-.344.251-.434z" />
                                    <path fill="white" fillRule="evenodd" d="M11.7 3h-.003c-.677.005-2.39.024-4.12.094c-.865.036-1.74.084-2.51.152c-.739.066-1.44.154-1.92.288c-.64.18-1.22.53-1.68 1.01a3.87 3.87 0 0 0-.96 1.72l-.013.045l-.007.046c-.526 3.21-.747 8.16.029 11.4l.002.008l.002.009a3.9 3.9 0 0 0 .961 1.72c.462.48 1.04.83 1.68 1.01c.433.123 1.05.206 1.7.267a47 47 0 0 0 2.23.146l.843.034c1.35.047 2.65.064 3.4.07l.743.004h.007c.371-.001 2.11-.008 3.96-.073c.924-.032 1.89-.079 2.72-.147c.81-.066 1.59-.158 2.09-.3c.64-.18 1.22-.53 1.68-1.01c.463-.48.793-1.07.961-1.72l.01-.041l.008-.042c.557-3.23.743-8.17-.027-11.4l-.002-.01l-.003-.01a3.9 3.9 0 0 0-.961-1.72a3.74 3.74 0 0 0-1.68-1.01c-.457-.128-1.13-.214-1.83-.278a51 51 0 0 0-2.39-.147l-.237-.01h-.001a127 127 0 0 0-3.75-.082l-.601-.004l-.344.002zM2.2 5.24a2.75 2.75 0 0 1 1.23-.741c1.49-.423 6.93-.487 8.28-.497l.334-.001l.598.003c.799.006 2.25.025 3.72.082l.235.009c1.65.068 3.28.186 3.99.389c.466.13.892.387 1.23.74s.588.797.714 1.28c.727 3.04.559 7.83.014 11a2.9 2.9 0 0 1-.714 1.28a2.75 2.75 0 0 1-1.23.742c-1.6.454-7.77.482-8.51.484l-.739-.003c-.749-.006-2.04-.023-3.38-.07l-.426-.017l-.407-.017c-1.55-.07-3.03-.186-3.7-.377a2.7 2.7 0 0 1-1.23-.74a2.9 2.9 0 0 1-.714-1.28c-.73-3.02-.53-7.82-.014-11a2.9 2.9 0 0 1 .714-1.28z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>


                    <div className="location">
                        <h3>Find Us</h3>
                        <div className="map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.961700056721!2d28.047804274513474!3d-26.2304339770604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950ee59b4859db%3A0xf5c96b65e4779d8a!2s72%20Marlborough%20Rd%2C%20Springfield%2C%20Johannesburg%2C%202190!5e0!3m2!1sen!2sza!4v1758013102340!5m2!1sen!2sza"
                                width="580"
                                height="250"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>

                </div>
            </section>
            
        </>
    )
}

export default Contact_Us
