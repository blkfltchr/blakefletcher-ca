import React from 'react'
import '../css/styles.css'
import {Helmet} from 'react-helmet'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Contact = () => (
    <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Contact - Blake Fletcher</title>
                <link rel="canonical" href="https://www.blakefletcher.ca/contact" />
        </Helmet>
        <Header />
        <div className="contact-wrapper">
            <h2>Contact.</h2>
            <form name="contact" method="post" action="/success" data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="bot-field" />
                <div className="form-input-wrapper">
                    <div className="form-input">
                        <label style={{}} htmlFor="name">Name</label>
                        <input style={{width: "30vw"}} type="text" name="name" id="name" required/>
                    </div>
                    <div className="form-input">
                        <label htmlFor="email">Email</label>
                        <input style={{width: "30vw"}} type="text" name="email" id="email" required/>
                    </div>
                </div>
                <div className="form-input">
                    <label htmlFor="message">Message</label>
                    <textarea style={{width: "63vw", fontFamily: "Merriweather, Georgia, Times New Roman, serif", fontSize: "1.4rem"}} name="message" id="message" rows="6" required></textarea>
                </div>
                <div>
                    <input className="contact-button" type="submit" value="Send Message"/>
                </div>
            </form>
            <p className="say-hello">I'm currently looking for opportunities as a full stack developer. Say hello, I’d love to connect: <a href="mailto:blkfltchr@gmail.com" target="_blank" rel="noopener noreferrer">blkfltchr@gmail.com</a></p>
        </div>
        <Footer />
    </div>
)

export default Contact