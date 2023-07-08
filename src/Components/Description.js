import React from 'react'
import Header from './Header'
import './Components.css';
import logo from '../home.jpg'
import { Link } from "react-router-dom";

const Description = (props) => {
    return (    
        <div>
          
             <Header/>
    <Link to="/"><img src={logo} className="image"/></Link> 
          <h1 className="titleT">{props.location.Props.name}</h1>
          <p className="descT">{props.location.Props.description}</p>
        </div>
    )
}

export default Description
