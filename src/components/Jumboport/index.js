import React from "react";
import "./style.css";

function Jumboport(props) {

    return(
        <div className="row">
            <div className="col-md-12">
                <div className="jumbotron">

                    <div className="row">
                        <div id={props.id} className="col-md-12">
                            <img className="web-thumb" src={props.image} alt={props.name}></img>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 port-card">
                            <a href={props.deployed}><h4 className="port-head">{props.name}</h4></a>
                            <a href={props.github}><h5 className="port-sub">Github</h5></a>
                            <p className="port-desc">{props.description}</p>
                            <p className="port-tools">Tools Used: </p><p className="port-desc">{props.tools}</p>
                        </div>
                        <a href="#0"><button className="port-button">Return to top</button></a>
                    </div>

                </div>
            </div>

        </div>
    )
};

export default Jumboport;