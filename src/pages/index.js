import React, { Component } from "react"
import '../css/index-styles.css'
import styled, { ThemeProvider } from 'styled-components'
import {Helmet} from 'react-helmet'
import Footer from '../components/Footer'
import Header from '../components/Header'

const darkTheme = {
    backgroundColor: '#303030', // background
    primaryColor: '#ababab', 
    secondaryColor: '#black',
    accentColor: '#8d2663', // pink links
    textColor: 'white' // text
  }
  
const lightTheme = {
    backgroundColor: 'white',
    primaryColor: '#ababab',
    secondaryColor: '#f6f9fc', // footer
    accentColor: 'blue', // links
    textColor: 'black' // text
}

const WrapperDiv = styled.div`
    background-color: ${props => props.theme.backgroundColor}
`

const StyledH2 = styled.h2`
    color: ${props => props.theme.textColor}
`

const StyledP = styled.p`
    color: ${props => props.theme.textColor}
`

const SayHello = styled.p`
    color: ${props => props.theme.textColor}
    font-family: Merriweather, Georgia, Times New Roman, serif; 
    font-size: 1.5rem; 
    text-align: center;
`

const StyledA = styled.a`
    color: ${props => props.theme.accentColor};
`

class Index extends Component {
    constructor() {
        super()
        this.state = {
            dark: false,
        }
    }
    
    onDarkToggle = () => {
    this.setState({dark: !this.state.dark})
    }

    render(){
        return ( 
            <ThemeProvider theme={this.state.dark ? darkTheme : lightTheme}>
                <WrapperDiv>
                    <Helmet>
                        <meta charSet="utf-8" />
                        <title>Hey! I'm Blake Fletcher.</title>
                        <link rel="canonical" href="https://www.blakefletcher.ca/" />
                    </Helmet>
                    <Header dark={this.state.dark} />
                    <div className="tg-list-item">
                        <input onClick={this.onDarkToggle} className="tgl tgl-skewed" id="cb3" type="checkbox"/>
                        <label className="tgl-btn" data-tg-off="🌚" data-tg-on="🌞" htmlFor="cb3"></label>
                    </div>
                    <div className="index-text">
                        <StyledH2>Hey! I'm Blake Fletcher.</StyledH2>
                        <StyledP>I like to find ways to connect technology to the things I love, like music, reading, learning, and connecting with others. I build things on the web, and tend to focus on front end, design, product, and sometimes growth. I enjoy teaming up with other makers like me.</StyledP>
                        <StyledP>Currently, I live in Toronto and work as a Project Manager for <StyledA href="https://lambdaschool.com/" target="_blank" rel="noopener noreferrer">Lambda School</StyledA>, helping graduates get the best jobs they've ever had.</StyledP>
                        <StyledP>I want to talk to people about their big plans – their dreams – and how they hope to accomplish them. One day, I’d like to know how to build rocketships from scratch and fly them into outer space. That may or may not be a metaphor.</StyledP>
                    </div>
                    <SayHello>Say hello, I’d love to connect: <StyledA href="mailto:blkfltchr@gmail.com" target="_blank" rel="noopener noreferrer">blkfltchr@gmail.com</StyledA></SayHello>
                    <Footer />
                </WrapperDiv>
            </ThemeProvider>
        )
    }
}

export default Index