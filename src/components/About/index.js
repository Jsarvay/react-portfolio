import React from "react";
import headshot from "../../images/sarvay.png"
import "./style.css";
import "../../index.css";


function About() {
    return (
        <div className="container">

            <div className="row">

                <div className="col-md-12">

                    <div className="jumbotron">

                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="display-4">About Me</h1>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12 about">
                                <img className="float-left image-fluid" src={headshot} alt="Jordan Picture" />
                                <p className="lead flex-wrap">Full Stack Web developer and current student of the University of Richmond’s Coding Bootcamp with a background in Theatre from Virginia Tech. Skills in HTML, CSS, Javascript, and Jquery and strengths in collaboration, leadership, and creativity. With a strong background in theatre and collaborative arts, I am a known team player with the ability to meet and exceed expectations and thrive in creative environments with strict deadlines. When approaching a project, I build from functionality up, ensuring that it meets client requirements before adding a unique and creative flair to stylize the page to meet each client’s individual personality. I am eager to combine my background in the arts with my developing technical skills in full stack web development in order to create a unique web interface that stands out and is easily accessible to the user.</p>
                            </div>
                        </div>

                        <div className="row about">
                          <div className="col-md-3">
                            <p className="bit">E-mail: </p><a className="contact" href= "mailto:jordans1@vt.edu">sarvayjordan@gmail.com</a>
                          </div>
                          <div className="col-md-3">
                            <p className="bit">Phone: </p><p className="contact">804-305-4878</p>
                          </div>
                          <div class="col-md-3">
                            <p className="bit">Github: </p><a className="contact" href="https://github.com/Jsarvay">JSarvay</a>
                          </div>
                          <div class="col-md-33">
                            <p class="bit">LinkedIn: </p><a className="contact" href="https://www.linkedin.com/in/jordan-sarvay/">Jordan-Sarvay</a>
                          </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
};

export default About;