import React, {useState,useEffect} from 'react'
import { Card,ListGroup,ListGroupItem } from 'react-bootstrap';
import './Components.css';
import ReactStars from "react-rating-stars-component";
import {Link} from 'react-router-dom'
import Trailer from './Trailer'


function CardV({elm}) {

  return (
    <div>
       <div >
          
            <Card className="card" name="one" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={elm.image}/>
            <Card.Body>
              <Card.Title>{elm.name}</Card.Title>
              <Card.Text>
              {elm. breiveD}
              </Card.Text>
             <div className="star"> <ReactStars 
              count={5}
              edit={false}
              size={24}
              value={elm.rating}
              activeColor="#ffd700"
            /></div>
              {/* <Card.Link href="#">ADD</Card.Link> */}
              <Card.Text> <Link to={{pathname:`/Trailer/${elm.name}`,Props:{name:elm.name,url:elm.url}}}>watch trailer</Link> </Card.Text>
              <Card.Text> <Link to={{pathname:`/Description/${elm.name}`,Props:{name:elm.name,description:elm.description}}}>Read more</Link> </Card.Text>
             
            </Card.Body>
          </Card>
           
         </div>
    </div>
  )
}

export default CardV




