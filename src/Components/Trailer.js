import React from 'react'
import Header from './Header'
import { Link } from "react-router-dom";
import './Components.css';
import logo from '../home.jpg'
function Trailer(props) {
   
   
    return (
        <div>
           
        <Header/>
    <Link to="/"><img src={logo} className="image"/></Link> 
     <h1 className="titleT">{props.location.Props.name}</h1>
     <iframe width="560" height="315" src={props.location.Props.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default Trailer

