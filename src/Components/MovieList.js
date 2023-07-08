import React from 'react'
import CardV from './CardV'
import './Components.css';

function MovieList({film,text,rate}) {
 

  return (
    <div className="movies">
      {film.filter(el=>(el.name.toLowerCase().includes(text.toLowerCase())&& parseInt(el.rating)>=rate)).map(el=><CardV elm={el} />)}
    </div>
    
  )
}

export default MovieList
