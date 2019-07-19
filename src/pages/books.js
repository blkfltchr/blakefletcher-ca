
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
import platform from '../images/platform-revolution.jpg'
import equation from '../images/happiness-equation.jpg'
import rumdiary from '../images/the-rum-diary.jpg'
import traction from '../images/traction.png'
import synchronicity from '../images/synchronicity.jpg'
import miracle from '../images/miracle-of-mindfulness.jpg'
import dothework from '../images/do-the-work.jpg'
import readyplayerone from '../images/ready-player-one.jpg'
import kafka from '../images/kafka-on-the-shore.jpg'
import siddhartha from '../images/siddhartha.jpg'
import thinkinginsystems from '../images/thinking-in-systems.jpg'
import lastlecture from '../images/the-last-lecture.jpg'
import nearlyeverything from '../images/short-history-of-nearly-everything.jpg'
import fifthbusiness from '../images/fifth-business.jpg'
import jitterbug from '../images/jitterbug-perfume.jpg'
import jesusson from '../images/jesus-son.jpg'
import artoflearning from '../images/art-of-learning.jpg'
import onwritingwell from '../images/on-writing-well.jpg'
import influence from '../images/influence.jpg'
import ego from '../images/ego-is-the-enemy.jpg'
import showyourwork from '../images/show-your-work.png'
import innergame from '../images/inner-game-of-tennis.jpg'
import artofthestart from '../images/art-of-the-start.jpg'
import pitchanything from '../images/pitch-anything.jpg'
import rework from '../images/rework.jpg'
import ignore from '../images/ignore-everybody.jpg'
import levels from '../images/levels-of-the-game.jpg'
import surfing from '../images/let-my-people-go-surfing.jpeg'
import iwtytbr from '../images/iwtytbr.jpg'

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
                    <p>These are the books I read, over and over again.</p>
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
                    </div>
                    <p>These are some of the books I've taken notes on.</p>
                    <div>
                        <a href="https://medium.com/@blakefletcher/on-writing-well-by-william-zinsser-in-5-minutes-d15e45b9501d" target="_blank" rel="noopener noreferrer"><img src={onwritingwell} alt="On Writing Well by William Zinsser in 5 minutes"/></a>
                        <a href="https://medium.com/@blakefletcher/influence-by-robert-cialdini-in-5-minutes-66c26032df6b" target="_blank" rel="noopener noreferrer"><img src={influence} alt="Influence by Robert Cialdini in 5 minutes"/></a>
                        <a href="https://medium.com/@blakefletcher/ego-is-the-enemy-by-ryan-holiday-in-5-minutes-8a22f98df1e3" target="_blank" rel="noopener noreferrer"><img src={ego} alt="Ego is the Enemy by Ryan Holiday in 5 minutes"/></a>
                        <a href="https://medium.com/@blakefletcher/show-your-work-by-austin-kleon-in-5-minutes-fd3335c416bf" target="_blank" rel="noopener noreferrer"><img src={showyourwork} alt="Show Your Work by Austin Kleon in 5 minutes"/></a>
                        <a href="https://medium.com/@blakefletcher/the-inner-game-of-tennis-by-w-timothy-gallwey-in-5-minutes-d1696f432517" target="_blank" rel="noopener noreferrer"><img src={innergame} alt="The Inner Game of Tennis by W. Timothy Gallwey in 5 minutes"/></a>
                        <a href="https://medium.com/@blakefletcher/art-of-the-start-2-0-by-guy-kawasaki-in-4-minutes-a432f17cbc2f" target="_blank" rel="noopener noreferrer"><img src={artofthestart} alt="The Art of the Start by Guy Kawasaki in 4 minutes"/></a>
                        <a href="https://medium.com/@blakefletcher/pitch-anything-by-oren-klaff-in-6-minutes-216268baa8c3" target="_blank" rel="noopener noreferrer"><img src={pitchanything} alt="Pitch Anything by Oren Klaff in 6 minutes"/></a>
                        <a href="https://medium.com/@blakefletcher/rework-by-jason-fried-and-dhh-in-6-minutes-2857682ba98" target="_blank" rel="noopener noreferrer"><img src={rework} alt="Rework by Jason Fried and DHH in 6 minutes"/></a>
                        <a href="https://medium.com/@blakefletcher/the-heros-journey-of-all-creative-people-b4d2e2bdc922" target="_blank" rel="noopener noreferrer"><img src={ignore} alt="Ignore Everybody by Hugh MacLeod in 3 minutes"/></a>
                    </div>
                    <p>These are the books I rate 5/5 but still haven't listed.</p>
                    <div className="book-notes">
                        <a href="https://www.goodreads.com/book/show/36613747-how-to-change-your-mind" target="_blank" rel="noopener noreferrer"><img src={yourmind} alt="How to Change Your Mind by Michael Pollan"/></a>
                        <a href="https://www.goodreads.com/book/show/36200111-tribe-of-mentors" target="_blank" rel="noopener noreferrer"><img src={tribe} alt="Tribe of Mentors by Tim Ferriss"/></a>
                        <a href="https://www.goodreads.com/book/show/29254.Be_Here_Now" target="_blank" rel="noopener noreferrer"><img src={beherenow} alt="Be Here Now by Ram Dass"/></a>
                        <a href="https://www.goodreads.com/book/show/33514.The_Elements_of_Style" target="_blank" rel="noopener noreferrer"><img src={elements} alt="The Elements of Style by Strunk & White"/></a>
                        <a href="https://www.goodreads.com/book/show/30901606-the-moth-presents-all-these-wonders" target="_blank" rel="noopener noreferrer"><img src={themoth} alt="The Moth Presents All These Wonders"/></a>
                        <a href="https://www.goodreads.com/book/show/25622861-platform-revolution" target="_blank" rel="noopener noreferrer"><img src={platform} alt="Platform Revolution by Parker, Van Alstyne, and Choudary"/></a>
                        <a href="https://www.goodreads.com/book/show/23665356-what-to-do-when-it-s-your-turn" target="_blank" rel="noopener noreferrer"><img src={yourturn} alt="What To Do When It's Your Turn by Seth Godin"/></a>
                        <a href="https://www.goodreads.com/book/show/22571656-the-happiness-equation" target="_blank" rel="noopener noreferrer"><img src={equation} alt="Happiness Equation by Neil Pasricha"/></a>
                        <a href="https://www.goodreads.com/book/show/18864.The_Rum_Diary" target="_blank" rel="noopener noreferrer"><img src={rumdiary} alt="The Rum Diary by Hunter S. Thompson"/></a>
                        <a href="https://www.goodreads.com/book/show/22091581-traction" target="_blank" rel="noopener noreferrer"><img src={traction} alt="Traction by Gabriel Weinberg"/></a>
                        <a href="https://www.goodreads.com/book/show/92545.Synchronicity" target="_blank" rel="noopener noreferrer"><img src={synchronicity} alt="Synchronicity by Joseph Jaworski"/></a>
                        <a href="https://www.goodreads.com/book/show/95747.The_Miracle_of_Mindfulness" target="_blank" rel="noopener noreferrer"><img src={miracle} alt="The Miracle of Mindfulness by Thich Nhat Hanh"/></a>
                        <a href="https://www.goodreads.com/book/show/10645233-do-the-work" target="_blank" rel="noopener noreferrer"><img src={dothework} alt="Do the Work by Steven Pressfield"/></a>
                        <a href="https://www.goodreads.com/book/show/9969571-ready-player-one" target="_blank" rel="noopener noreferrer"><img src={readyplayerone} alt="Ready Player One by Ernest Cline"/></a>
                        <a href="https://www.goodreads.com/book/show/4929.Kafka_on_the_Shore" target="_blank" rel="noopener noreferrer"><img src={kafka} alt="Kafka on the Shore by Haruki Murakami"/></a>
                        <a href="https://www.goodreads.com/book/show/52036.Siddhartha" target="_blank" rel="noopener noreferrer"><img src={siddhartha} alt="Siddhartha by Herman Hesse"/></a>
                        <a href="https://www.goodreads.com/book/show/3828902-thinking-in-systems" target="_blank" rel="noopener noreferrer"><img src={thinkinginsystems} alt="Thinking in Systems by Donella H. Meadows"/></a>
                        <a href="https://www.goodreads.com/book/show/2318271.The_Last_Lecture" target="_blank" rel="noopener noreferrer"><img src={lastlecture} alt="The Last Lecture by Randy Pausch"/></a>
                        <a href="https://www.goodreads.com/book/show/21.A_Short_History_of_Nearly_Everything" target="_blank" rel="noopener noreferrer"><img src={nearlyeverything} alt="A Short History of Nearly Everything by Bill Bryson"/></a>
                        <a href="https://www.goodreads.com/book/show/74406.Fifth_Business" target="_blank" rel="noopener noreferrer"><img src={fifthbusiness} alt="Fifth Business by Robertson Davies"/></a>
                        <a href="https://www.goodreads.com/book/show/8682.Jitterbug_Perfume" target="_blank" rel="noopener noreferrer"><img src={jitterbug} alt="Jitterbug Perfume by Tom Robbins"/></a>
                        <a href="https://www.goodreads.com/book/show/608287.Jesus_Son" target="_blank" rel="noopener noreferrer"><img src={jesusson} alt="Jesus' Son by Denis Johnson"/></a>
                        <a href="https://www.goodreads.com/book/show/857333.The_Art_of_Learning" target="_blank" rel="noopener noreferrer"><img src={artoflearning} alt="The Art of Learning by Josh Waitzskin"/></a>
                        <a href="https://www.goodreads.com/book/show/54975.Levels_of_the_Game" target="_blank" rel="noopener noreferrer"><img src={levels} alt="levels of the game"/></a>
                        <a href="https://www.goodreads.com/book/show/4924862-i-will-teach-you-to-be-rich" target="_blank" rel="noopener noreferrer"><img src={iwtytbr} alt="I Will Teach You To Be Rich by Ramit Sethi"/></a>
                    </div>
                </div>
            </div>
            <p className="say-hello">Say hello, I’d love to connect: <a href="mailto:blkfltchr@gmail.com" target="_blank" rel="noopener noreferrer">blkfltchr@gmail.com</a></p>
            <Footer />
        </div>
    )
}

export default Books