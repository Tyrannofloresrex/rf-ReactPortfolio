import React from "react"
import IMG_3093 from "../assets/IMG_3093.jpg"
import "./pages.css"
function About() {
    return (
        <main className="container">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12" id="about">
                    <section className="jumbotron">
                        <h1 className="display-4">
                            About Me
                        </h1>
                        <hr className="my-4" />
                        <div className="row">
                            <div id="about-img" className="col-12">
                                <img src={IMG_3093}
                                className="img-responsive" alt="Rex Flores" style={{height: "300px", width:"300px"}} />
                                <p>
                                Hi, my name is Rex Flores and welcome to my portfolio! This site is a collection of my early work in web design. As a film school graduate and former educator, my goal in web development is to create informative and entertaining content with simple, but memorable user experience. 
                                </p>
                                <br/>
                                <p> The Internet is a huge place, and I want to work to capture the ever elusive user-attention span long enough to bring some mirth into their lives. Want to learn about me? You're already doing it on this page by reading this! Want to see what I've been making? Checkout the gallery! Do you want to tell me how awesome I am, or offer me gainful employment? Submit a  message on the contact page (*Disclaimer* the form is not currently functional.) Thanks for visiting and do come back!</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
}

export default About;