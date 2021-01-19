import React, {Component} from "react";
import Jumboport from "../Jumboport/index";
import portfolio from "../../portfolio.json";
import "./style.css";

class Portfolio extends Component {
    state= {
        portfolio
    };

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <div className="jumbotron">
                        <div className="row">
                            <div id="0" className="col-md-12">
                                <h1 className="display-4">Portfolio</h1>
                                <h2 className="hide-small">Portfolio</h2>
                            </div>
                        </div>
                    

                        <div className="row">
                            <div className="col-md-12 button-div">
                            <a href="#1"><button className="port-button" id="togetherAgainst" class="port-button">Together Against</button></a>
                            <a href="#2"><button className="port-button" id="rvaVen" class="port-button">RVA Venues</button></a>
                            <a href="#3"><button className="port-button" id="weatherApp" class="port-button">Sarvay's Weather App</button></a>
                            <a href="#4"><button className="port-button" id="codeQuiz" class="port-button">Code Quiz</button></a>
                            <a href="#5"><button className="port-button" id="burgerApp" class="port-button">Burger App</button></a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>


                    {this.state.portfolio.map(portfolio => (
                        <Jumboport
                        id={portfolio.id}
                        name={portfolio.name}
                        image={require("./images/" + portfolio.image).default}
                        deployed={portfolio.deployed}
                        github={portfolio.github}
                        description={portfolio.description}
                        tools={portfolio.tools}
                        />
                    ))}
            </div>
        )
    };
};

export default Portfolio;