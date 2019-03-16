
import React from 'react'
import '../css/styles.css'
import {Helmet} from 'react-helmet'
import Header from '../components/Header'
import Footer from '../components/Footer'
import emyth from '../images/e-myth-revisited.jpg'
import enders from '../images/enders-game.jpg'
import howtofail from '../images/how-to-fail-at-almost-everything-and-still-win-big.jpg'
import insomniac from '../images/insomniac-city.jpg'
import meditations from '../images/meditations.jpg'
import proust from '../images/how-proust-can-change-your-life.jpg'
import rebel from '../images/rebel-without-a-crew.jpg'
import seagull from '../images/jonathan-livingston-seagull.jpg'
import vagabonding from '../images/vagabonding.jpg'
import virginity from '../images/losing-my-virginity.jpg'
import zen from '../images/zen-and-art-of-motorcycle-maintenance.jpg'

const Books = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Books - Blake Fletcher</title>
                <link rel="canonical" href="https://www.blakefletcher.ca/books" />
            </Helmet>
            <Header />
            <div className="books-wrapper">
                <h2>Books.</h2>
                <div className="books-container">
                    <p>These are the books I've read, again and again.</p>
                    <div>
                        <a href="https://www.goodreads.com/book/show/81948.The_E_Myth_Revisited" target="_blank" rel="noopener noreferrer"><img src={emyth} alt="e myth revisited"/></a>
                        <a href="https://www.goodreads.com/book/show/375802.Ender_s_Game" target="_blank" rel="noopener noreferrer"><img src={enders} alt="enders game"/></a>
                        <a href="https://www.goodreads.com/book/show/17859574-how-to-fail-at-almost-everything-and-still-win-big" target="_blank" rel="noopener noreferrer"><img src={howtofail} alt="how to fail"/></a>
                        <a href="https://www.goodreads.com/book/show/17859574-how-to-fail-at-almost-everything-and-still-win-big" target="_blank" rel="noopener noreferrer"><img src={insomniac} alt="insomniac city"/></a>
                        <a href="https://www.goodreads.com/book/show/30659.Meditations" target="_blank" rel="noopener noreferrer"><img src={meditations} alt="meditations"/></a>
                        <a href="https://www.goodreads.com/book/show/23420.How_Proust_Can_Change_Your_Life" target="_blank" rel="noopener noreferrer"><img src={proust} alt="how proust can change your life"/></a>
                        <a href="https://www.goodreads.com/book/show/51430.Rebel_Without_a_Crew_or_How_a_23_Year_Old_Filmmaker_with_7_000_Became_a_Hollywood_Player" target="_blank" rel="noopener noreferrer"><img src={rebel} alt="rebel without a crew"/></a>
                        <a href="https://www.goodreads.com/book/show/71728.Jonathan_Livingston_Seagull" target="_blank" rel="noopener noreferrer"><img src={seagull} alt="jonathan livingston seagull"/></a>
                        <a href="https://www.goodreads.com/book/show/100247.Vagabonding" target="_blank" rel="noopener noreferrer"><img src={vagabonding} alt="vagabonding"/></a>
                        <a href="https://www.goodreads.com/book/show/211099.Losing_My_Virginity" target="_blank" rel="noopener noreferrer"><img src={virginity} alt="losing my virginity"/></a>
                        <a href="https://www.goodreads.com/book/show/629.Zen_and_the_Art_of_Motorcycle_Maintenance" target="_blank" rel="noopener noreferrer"><img src={zen} alt="zen and the art of motorcycle maintenance"/></a>
                    </div>
                    <p>These are some of the notes I've taken from some of the books I've read.</p>
                    <ul className="book-notes">
                        <li><a href="https://medium.com/@blakefletcher/on-writing-well-by-william-zinsser-in-5-minutes-d15e45b9501d" target="_blank" rel="noopener noreferrer">On Writing Well by William Zinsser in 5 minutes</a></li>
                        <li><a href="https://medium.com/@blakefletcher/influence-by-robert-cialdini-in-5-minutes-66c26032df6b" target="_blank" rel="noopener noreferrer">Influence by Robert Cialdini in 5 minutes</a></li>
                        <li><a href="https://medium.com/@blakefletcher/ego-is-the-enemy-by-ryan-holiday-in-5-minutes-8a22f98df1e3" target="_blank" rel="noopener noreferrer">Ego is the Enemy by Ryan Holiday in 5 minutes</a></li>
                        <li><a href="https://medium.com/@blakefletcher/show-your-work-by-austin-kleon-in-5-minutes-fd3335c416bf" target="_blank" rel="noopener noreferrer">Show Your Work by Austin Kleon in 5 minutes</a></li>
                        <li><a href="https://medium.com/@blakefletcher/how-to-fail-at-almost-everything-and-still-win-big-by-scott-adams-in-5-minutes-14cd829c9c8f" target="_blank" rel="noopener noreferrer">How to Fail at Almost Everything and Still Win Big by Scott Adams in 5 minutes</a></li>
                        <li><a href="https://medium.com/@blakefletcher/the-inner-game-of-tennis-by-w-timothy-gallwey-in-5-minutes-d1696f432517" target="_blank" rel="noopener noreferrer">The Inner Game of Tennis by W. Timothy Gallwey in 5 minutes</a></li>
                        <li><a href="https://medium.com/@blakefletcher/art-of-the-start-2-0-by-guy-kawasaki-in-4-minutes-a432f17cbc2f" target="_blank" rel="noopener noreferrer">The Art of the Start by Guy Kawasaki in 4 minutes</a></li>
                        <li><a href="https://medium.com/@blakefletcher/pitch-anything-by-oren-klaff-in-6-minutes-216268baa8c3" target="_blank" rel="noopener noreferrer">Pitch Anything by Oren Klaff in 6 minutes</a></li>
                        <li><a href="https://medium.com/@blakefletcher/rework-by-jason-fried-and-dhh-in-6-minutes-2857682ba98" target="_blank" rel="noopener noreferrer">Rework by Jason Fried and DHH in 6 minutes</a></li>
                        <li><a href="https://medium.com/@blakefletcher/the-heros-journey-of-all-creative-people-b4d2e2bdc922" target="_blank" rel="noopener noreferrer">Ignore Everybody by Hugh MacLeod in 3 minutes</a></li>
                    </ul>
                </div>
            </div>
            <p className="say-hello">Say hello, I’d love to connect: <a href="mailto:blkfltchr@gmail.com" target="_blank" rel="noopener noreferrer">blkfltchr@gmail.com</a></p>
            <Footer />
        </div>
    )
}

export default Books