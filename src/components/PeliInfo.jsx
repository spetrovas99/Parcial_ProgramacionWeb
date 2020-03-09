import React from "react";
import AllCharacters from "./AllCharacters";

const peliInfo = (props) =>{
    return(
        <div className = "PeliInfo">
                        <div>
                            <h3>  {props.peliSelect.title}</h3>
                            <div className="Characters">
                                <img className="imagePeliMax" src={props.peliSelect.image}/>
                                <div >
                                <p><b>Episode:</b>{props.peliSelect.episode_id}</p> 
                                    <p><b>Director:</b>{props.peliSelect.director}</p>
                                    <p><b>Release:</b>{props.peliSelect.release_date}</p>
                                    <p><b>Begining:</b>{props.peliSelect.opening_crawl}</p>
                                </div>
                            </div>
                            
                            <AllCharacters peliSelect = {props.peliSelect}>

                            </AllCharacters>
                        </div>
                    
        </div>
    )
}

export default peliInfo;