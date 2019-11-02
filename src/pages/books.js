
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
import rebel from '../images/rebel-without-a-crew.jpg'
import seagull from '../images/jonathan-livingston-seagull.jpg'
import vagabonding from '../images/vagabonding.jpg'
import virginity from '../images/losing-my-virginity.jpg'
import zen from '../images/zen-and-art-of-motorcycle-maintenance.jpg'
import yourmind from '../images/how-to-change-your-mind.jpg'
import tribe from '../images/tribe-of-mentors.jpg'
import beherenow from '../images/be-here-now.jpg'
import elements from '../images/elements-of-style.jpg'
import themoth from '../images/the-moth-presents.jpg'
import yourturn from '../images/what-to-do-when-its-your-turn.jpg'
import equation from '../images/happiness-equation.jpg'
import rumdiary from '../images/the-rum-diary.jpg'
import traction from '../images/traction.png'
import miracle from '../images/miracle-of-mindfulness.jpg'
import dothework from '../images/do-the-work.jpg'
import readyplayerone from '../images/ready-player-one.jpg'
import siddhartha from '../images/siddhartha.jpg'
import thinkinginsystems from '../images/thinking-in-systems.jpg'
import lastlecture from '../images/the-last-lecture.jpg'
import nearlyeverything from '../images/short-history-of-nearly-everything.jpg'
import fifthbusiness from '../images/fifth-business.jpg'
import jitterbug from '../images/jitterbug-perfume.jpg'
import jesusson from '../images/jesus-son.jpg'
import artoflearning from '../images/art-of-learning.jpg'
import surfing from '../images/let-my-people-go-surfing.jpeg'
import iwtytbr from '../images/iwtytbr.jpg'
import smartnotes from '../images/smart-notes-cover.jpg'
import ecommerceevolved from '../images/ecommerce-evolved.jpg'
import artofthinking from '../images/art-of-thinking-clearly.jpg'

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
                    <p>These are the books I read, over and over again. I recommend them all.</p>
                    <div>
                        <a href="https://www.goodreads.com/book/show/81948.The_E_Myth_Revisited" target="_blank" rel="noopener noreferrer"><img src={emyth} alt="e myth revisited"/></a>
                        <a href="https://www.goodreads.com/book/show/375802.Ender_s_Game" target="_blank" rel="noopener noreferrer"><img src={enders} alt="enders game"/></a>
                        <a href="https://www.goodreads.com/book/show/17859574-how-to-fail-at-almost-everything-and-still-win-big" target="_blank" rel="noopener noreferrer"><img src={howtofail} alt="how to fail"/></a>
                        <a href="https://www.goodreads.com/book/show/17859574-how-to-fail-at-almost-everything-and-still-win-big" target="_blank" rel="noopener noreferrer"><img src={insomniac} alt="insomniac city"/></a>
                        <a href="https://www.goodreads.com/book/show/22155.Let_My_People_Go_Surfing" target="_blank" rel="noopener noreferrer"><img src={surfing} alt="let my people go surfing"/></a>
                        <a href="https://www.goodreads.com/book/show/30659.Meditations" target="_blank" rel="noopener noreferrer"><img src={meditations} alt="meditations"/></a>
                        <a href="https://www.goodreads.com/book/show/51430.Rebel_Without_a_Crew_or_How_a_23_Year_Old_Filmmaker_with_7_000_Became_a_Hollywood_Player" target="_blank" rel="noopener noreferrer"><img src={rebel} alt="rebel without a crew"/></a>
                        <a href="https://www.goodreads.com/book/show/71728.Jonathan_Livingston_Seagull" target="_blank" rel="noopener noreferrer"><img src={seagull} alt="jonathan livingston seagull"/></a>
                        <a href="https://www.goodreads.com/book/show/100247.Vagabonding" target="_blank" rel="noopener noreferrer"><img src={vagabonding} alt="vagabonding"/></a>
                        <a href="https://www.goodreads.com/book/show/211099.Losing_My_Virginity" target="_blank" rel="noopener noreferrer"><img src={virginity} alt="losing my virginity"/></a>
                        <a href="https://www.goodreads.com/book/show/629.Zen_and_the_Art_of_Motorcycle_Maintenance" target="_blank" rel="noopener noreferrer"><img src={zen} alt="zen and the art of motorcycle maintenance"/></a>
                        <a href="https://www.goodreads.com/book/show/36613747-how-to-change-your-mind" target="_blank" rel="noopener noreferrer"><img src={yourmind} alt="How to Change Your Mind by Michael Pollan"/></a>
                        <a href="https://www.goodreads.com/book/show/36200111-tribe-of-mentors" target="_blank" rel="noopener noreferrer"><img src={tribe} alt="Tribe of Mentors by Tim Ferriss"/></a>
                        <a href="https://www.goodreads.com/book/show/29254.Be_Here_Now" target="_blank" rel="noopener noreferrer"><img src={beherenow} alt="Be Here Now by Ram Dass"/></a>
                        <a href="https://www.goodreads.com/book/show/33514.The_Elements_of_Style" target="_blank" rel="noopener noreferrer"><img src={elements} alt="The Elements of Style by Strunk & White"/></a>
                        <a href="https://www.goodreads.com/book/show/30901606-the-moth-presents-all-these-wonders" target="_blank" rel="noopener noreferrer"><img src={themoth} alt="The Moth Presents All These Wonders"/></a>
                        <a href="https://www.goodreads.com/book/show/23665356-what-to-do-when-it-s-your-turn" target="_blank" rel="noopener noreferrer"><img src={yourturn} alt="What To Do When It's Your Turn by Seth Godin"/></a>
                        <a href="https://www.goodreads.com/book/show/22571656-the-happiness-equation" target="_blank" rel="noopener noreferrer"><img src={equation} alt="Happiness Equation by Neil Pasricha"/></a>
                        <a href="https://www.goodreads.com/book/show/18864.The_Rum_Diary" target="_blank" rel="noopener noreferrer"><img src={rumdiary} alt="The Rum Diary by Hunter S. Thompson"/></a>
                        <a href="https://www.goodreads.com/book/show/22091581-traction" target="_blank" rel="noopener noreferrer"><img src={traction} alt="Traction by Gabriel Weinberg"/></a>
                        <a href="https://www.goodreads.com/book/show/95747.The_Miracle_of_Mindfulness" target="_blank" rel="noopener noreferrer"><img src={miracle} alt="The Miracle of Mindfulness by Thich Nhat Hanh"/></a>
                        <a href="https://www.goodreads.com/book/show/10645233-do-the-work" target="_blank" rel="noopener noreferrer"><img src={dothework} alt="Do the Work by Steven Pressfield"/></a>
                        <a href="https://www.goodreads.com/book/show/9969571-ready-player-one" target="_blank" rel="noopener noreferrer"><img src={readyplayerone} alt="Ready Player One by Ernest Cline"/></a>
                        <a href="https://www.goodreads.com/book/show/52036.Siddhartha" target="_blank" rel="noopener noreferrer"><img src={siddhartha} alt="Siddhartha by Herman Hesse"/></a>
                        <a href="https://www.goodreads.com/book/show/3828902-thinking-in-systems" target="_blank" rel="noopener noreferrer"><img src={thinkinginsystems} alt="Thinking in Systems by Donella H. Meadows"/></a>
                        <a href="https://www.goodreads.com/book/show/2318271.The_Last_Lecture" target="_blank" rel="noopener noreferrer"><img src={lastlecture} alt="The Last Lecture by Randy Pausch"/></a>
                        <a href="https://www.goodreads.com/book/show/21.A_Short_History_of_Nearly_Everything" target="_blank" rel="noopener noreferrer"><img src={nearlyeverything} alt="A Short History of Nearly Everything by Bill Bryson"/></a>
                        <a href="https://www.goodreads.com/book/show/74406.Fifth_Business" target="_blank" rel="noopener noreferrer"><img src={fifthbusiness} alt="Fifth Business by Robertson Davies"/></a>
                        <a href="https://www.goodreads.com/book/show/8682.Jitterbug_Perfume" target="_blank" rel="noopener noreferrer"><img src={jitterbug} alt="Jitterbug Perfume by Tom Robbins"/></a>
                        <a href="https://www.goodreads.com/book/show/608287.Jesus_Son" target="_blank" rel="noopener noreferrer"><img src={jesusson} alt="Jesus' Son by Denis Johnson"/></a>
                        <a href="https://www.goodreads.com/book/show/857333.The_Art_of_Learning" target="_blank" rel="noopener noreferrer"><img src={artoflearning} alt="The Art of Learning by Josh Waitzskin"/></a>
                        <a href="https://www.goodreads.com/book/show/4924862-i-will-teach-you-to-be-rich" target="_blank" rel="noopener noreferrer"><img src={iwtytbr} alt="I Will Teach You To Be Rich by Ramit Sethi"/></a>
                        <a href="https://www.goodreads.com/book/show/34507927-how-to-take-smart-notes" target="_blank" rel="noopener noreferrer"><img src={smartnotes} alt="How To Take Smart Notes by Sönke Ahrens" /></a>
                        <a href="https://www.goodreads.com/book/show/35102660-ecommerce-evolved" target="_blank" rel="noopener noreferrer"><img src={ecommerceevolved} alt="Ecommerce Evolved by Tanner Larsson" /></a>
                        <a href="https://www.goodreads.com/book/show/16248196-the-art-of-thinking-clearly" target="_blank" rel="noopener noreferrer"><img src={artofthinking} alt="The Art of Thinking Clearly by Rolf Dobelli" /></a>
                    </div>
                </div>
            </div>
            <p className="say-hello">Say hello, I’d love to connect: <a href="mailto:blkfltchr@gmail.com" target="_blank" rel="noopener noreferrer">blkfltchr@gmail.com</a></p>
            <Footer />
        </div>
    )
}

export default Books
