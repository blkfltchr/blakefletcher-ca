import React from 'react'
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
        <div style={{margin: "2.5rem auto 0 auto", height: "100%", textAlign: "center", width: "80vw", display: "flex", flexDirection: "column", alignItems: "center"}}>
            <h2 style={{fontFamily: "Lato, Helvetica, Arial, Lucida, sans-serif", fontSize: "2rem"}}>Contact.</h2>
            <form name="contact" method="post" action="/success" data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="bot-field" />
                <div style={{display: "flex", justifyContent: "center"}}>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                        <label style={{fontFamily: "Merriweather, Georgia, Times New Roman, serif", fontSize: "1.5rem", textAlign: "center"}} htmlFor="name">Name</label>
                        <input style={{width: "30vw", margin: "0.5rem", padding: "0.5rem 0 1.5rem 0", border: "solid 1px lightgrey", borderRadius: "1rem"}} type="text" name="name" id="name" required/>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                        <label style={{fontFamily: "Merriweather, Georgia, Times New Roman, serif", fontSize: "1.5rem", textAlign: "center"}}  htmlFor="email">Email</label>
                        <input style={{width: "30vw", margin: "0.5rem", padding: "0.5rem 0 1.5rem 0", border: "solid 1px lightgrey", borderRadius: "1rem"}} type="text" name="email" id="email" required/>
                    </div>
                </div>
                <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                    <label style={{fontFamily: "Merriweather, Georgia, Times New Roman, serif", fontSize: "1.5rem", textAlign: "center"}}  htmlFor="message">Message</label>
                    <textarea style={{width: "63vw", margin: "0.5rem", padding: "0.5rem 0 1.5rem 0", border: "solid 1px lightgrey", borderRadius: "1rem"}} name="message" id="message" rows="6" required></textarea>
                </div>
                <div>
                    <input style={{backgroundColor: "blue", color: "white", fontSize: "1.1rem", padding: "5px", margin: "5px 5px 10px 5px", borderRadius: "5px", border: "solid 2px blue", fontWeight: "bold", textDecoration: "none", fontFamily: "Lato, Helvetica, Arial, Lucida, sans-serif"}} type="submit" value="Send Message"/>
                </div>
            </form>
        </div>
        <Footer />
    </div>
)

export default Contact