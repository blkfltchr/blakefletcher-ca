import React from 'react'
import '../../css/styles.css'
import {StaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import flutter from '../../images/flutter-logo-rectangle.png'
import dart from '../../images/dart-logo-rectangle.png'
import materialui from '../../images/materialui-logo-square.png'

const LambdaTimeline = () => (

    <StaticQuery 
        query = {graphql`
            query {
                file(relativePath: {
                    regex: "/timeline/"
                }) {
                    childImageSharp {
                        sizes(quality: 100) {
                            ...GatsbyImageSharpSizes
                        }   
                    }
                }
            }
        `}
        render={
            data => (
                <div className="project-card-wrapper">
                    <div className="project-card">
                        <Img className="project-card-img" sizes={data.file.childImageSharp.sizes} alt="lambdatimeline "/>
                        <div className="project-buttons">
                            <a 
                                className="purple-button"
                                href="https://github.com/sagardesai90/LambdaTimeline" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                Code
                            </a>
                            <a 
                                className="purple-button"
                                href="https://www.youtube.com/watch?v=OR8S5wyyTlA" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                Video
                            </a>
                        </div>
                    </div>
                    <div className="project-content">
                        <h4>Lambda Timeline</h4>
                        <p style={{fontFamily: "Lato,Helvetica,Arial,Lucida,sans-serif"}}><span style={{fontStyle: "italic"}}>Hackathon winner - Most Polished Mobile UI</span> <span role="img" aria-label="trophy">🏆</span></p>
                        <p className="left-paragraph">An iOS/Android app that allows prospective students to explore Lambda's curriculum and apply to each of the school's major tracks (Full-Stack Web, iOS, Data Science, Android, UX Design).</p>
                        <div>
                            <img src={flutter} alt="flutter logo"/>
                            <img src={dart} alt="graphql logo"/>
                            <img src={materialui} title="material ui" alt="materialui logo"/>
                        </div>
                    </div>
                    <div>
                            <a 
                                className="purple-button"
                                href="https://github.com/sagardesai90/LambdaTimeline" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                Code
                            </a>
                            <a 
                                className="purple-button"
                                href="https://www.youtube.com/watch?v=OR8S5wyyTlA" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                Video 
                            </a>
                        </div>
                </div>
            )
        }
    />
)

export default LambdaTimeline