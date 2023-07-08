import React from 'react'
import { Form,FormControl,Nav,Navbar,Button,NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Components.css';
import ReactStars from "react-rating-stars-component";

function Header({searchtext, searchrate}) {

    return (
        <div>
      <Navbar className="navColor" expand="lg">
  <Navbar href="#home" className="logo">Bo<h1 className="box">X </h1>Movies</Navbar>
  <Navbar.Toggle   />
  <Navbar.Collapse  className="search">
    <Form inline >
      <FormControl type="text" placeholder="Search" onChange={(e)=>searchtext(e.target.value)}/>
      <Button className="butt">Search</Button>
      <div className="star2">
         <ReactStars 
              count={5}
              size={24}
              // value={elm.rating}
              onChange={(newRating)=>searchrate(newRating)}
              activeColor="#ffd700"
            /></div>
    
  
        
    </Form>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default Header


