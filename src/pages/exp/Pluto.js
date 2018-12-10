import React from 'react'
import {StaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'

const Pluto = () => (

    <StaticQuery 
        query = {graphql`
            query {
                file(relativePath: {
                    regex: "/pluto/"
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
                <div>
                    <Img style={{width: "60vw"}} sizes={data.file.childImageSharp.sizes} alt="pluto jumbo"/>
                    <h4 style={{fontFamily: "Lato,Helvetica,Arial,Lucida,sans-serif", fontSize: "1.4rem"}}>Pluto</h4>
                    <p style={{fontFamily: "Merriweather,Georgia,Times New Roman,serif", fontSize: "1.1rem", textAlign: "center"}}>We were fed up with the lack of real human interactions happening online. Our aim was to create an online community that inspired face-to-face connection by giving people access to great conversations on demand. We tested an alpha, raised funding and shipped our BETA. Ultimately, our team wasn’t able to build the right product but I learned a ton about leadership, marketing, leveraging connections, user empathy. The list goes on. I’m convinced that it can’t be done for now, but I’m not convinced it shouldn’t be done. I’m still trying to solve the problem of loneliness and disconnection.</p>
                </div>
            )
        }
    />
)

export default Pluto