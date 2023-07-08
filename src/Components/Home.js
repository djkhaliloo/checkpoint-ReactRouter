import React from 'react'
import Header from './Header'
import MovieList from './MovieList';
import AddModal from './AddModal'
import {useState} from 'react';


function Home() {
  const [film,setFilm]=useState([{ 
    name:"Raya and the Dragon",
    image:"https://img.moviesjoy.to/resize/188x288/da/6a/da6aee2241ea4c209000eb873b1e101d/da6aee2241ea4c209000eb873b1e101d.jpg",
    breiveD:"A family's road trip is upended when they find themselves in the middle of the robot apocalypse.",
    url:"https://www.youtube.com/embed/EMQpPMDo_8w",
    rating:'4',
    description:"Long ago, in the fantasy world of Kumandra, humans and dragons lived together in harmony. But when an evil force threatened the land, the dragons sacrificed themselves to save humanity. Now, 500 years later, that same evil has returned and it’s up to a lone warrior, Raya, to track down the legendary last dragon to restore the fractured land and its divided people."

  },
  {
    name:"Mortal Kombat",
    image:"https://img.moviesjoy.to/resize/188x288/d2/fc/d2fc1ca8f9fc8d04dfe3329a0f3257ef/d2fc1ca8f9fc8d04dfe3329a0f3257ef.jpg",
    breiveD:"Sub-Zero prepares to stand against the enemies of Outworld in a high stakes battle for the universe.",
    url:"https://www.youtube.com/embed/e0fy8aqe4Aw",
    rating:'5',
    description:"Washed-up MMA fighter Cole Young, unaware of his heritage, and hunted by Emperor Shang Tsung's best warrior, Sub-Zero, seeks out and trains with Earth's greatest champions as he prepares to stand against the enemies of Outworld in a high stakes battle for the universe."

  },
  {
    name:"The Aftermath",
    image:"https://img.moviesjoy.to/resize/188x288/c2/19/c2191873b8a2fc677c047584ae2df6f0/c2191873b8a2fc677c047584ae2df6f0.jpg",
    breiveD:" A young man named Darwin lives, in a small cement module with little more than a computer.",
    url:"https://www.youtube.com/embed/CuRzvxXhljE",
    rating:'4',
    description:"In a future society, a young man named Darwin lives, like everyone else; in a small cement module with little more than a computer. One night, during a violent storm, lightning hits Darwin’s module and knocks out his computer, forcing him to venture outside. He is surprised to come across a beautiful young woman, living with her family in the woods, who teach him how to speak and show him the value of human contact. Meanwhile, the security forces have sent drones to search for and recapture him."

  },
  {
    name:"Good By Honey",
    image:"https://img.moviesjoy.to/resize/188x288/be/20/be208bd9ffd2ed045830848359db0319/be208bd9ffd2ed045830848359db0319.jpg",
    breiveD:" A frantic crazy woman must coerce an exhausted truck driver to hide in the back of her truck. ",
    url:"https://www.youtube.com/embed/VBHOdtKgN-o",
    rating:'5',
    description:"After escaping abduction, a frantic woman must coerce an exhausted truck driver to hide in the back of her truck for the night. The two women take refuge, not knowing what the rest of the night has in store."
    

  },
  {
    name:"Long Weekend",
    image:"https://img.moviesjoy.to/resize/188x288/75/71/757144948175017c183e24aff21809f8/757144948175017c183e24aff21809f8.jpg",
    breiveD:"Bart's chance encounter with the enigmatic Vienna leads to a whirlwind weekend together. ",
    url:"https://www.youtube.com/embed/HphL31Hw2x8",
    rating:'2',
    description:"Bart's chance encounter with the enigmatic Vienna leads to a whirlwind weekend together. The two fall fast and hard, but both carry secrets that could be their undoing or the chance for a fresh start."

  },
  {
    name:"Burning Lies",
    image:"https://img.moviesjoy.to/resize/188x288/11/ea/11eac8ffb567896f7d7072e5a2fc0792/11eac8ffb567896f7d7072e5a2fc0792.jpg",
    breiveD:" A woman falls for a handsome firefighter after he rescues her from a suspicious car crash. ",
    url:"https://www.youtube.com/embed/4gBR5RxeUQ4",
    rating:'4',
    description:"A woman falls for a handsome firefighter after he rescues her from a suspicious car crash. But her life spins into tragedy after his seemingly overprotective behavior burns through her life."

  },
  {
    name:"Love in Whitbrooke",
    image:"https://img.moviesjoy.to/resize/188x288/18/51/1851b6eca89f1f98500de4dfed8ab2a1/1851b6eca89f1f98500de4dfed8ab2a1.jpg",
    breiveD:" A project manager is offered the career opportunity of a lifetime in London. ",
    url:"https://www.youtube.com/embed/36C2ii_G1no",
    rating:'3',
    description:"An ambitious project manager is offered the career opportunity of a lifetime in London. But when she returns to her hometown to help the family business in an emergency and meets the perfect guy, her passion and talent for painting is rekindled, giving her a new outlook on life and love."

  },
  {
    name:"Seance",
    image:"https://img.moviesjoy.to/resize/188x288/80/0d/800ddf68d2f8fdf4cb640d0b40bfc612/800ddf68d2f8fdf4cb640d0b40bfc612.jpg",
    breiveD:" Camille is the new girl at the prestigious Fairfield Academy for Girls. ",
    url:"https://www.youtube.com/embed/57swfweQyqQ",
    rating:'5',
    description:"Camille is the new girl at the prestigious Fairfield Academy for Girls. Drawn into the mystery surrounding Kerrie, a student who died following a seance summoning the legendary Fairfield Ghost, Camille befriends Kerrie’s clique. When they invite her to their next seance, she initially believes that she is being pranked, but then the girls start being killed off one by one. The Fairfield Ghost has come to take its revenge and Camille must turn detective and solve the mystery, or suffer the same fate."

  },

])
const add=(newMovie)=>{
  setFilm(film=>([...film,newMovie]))
  console.log(newMovie)
 
}
const [text, settext] = useState('')
const [rate, setrate] = useState('1')


const searchtext=(text)=>{
settext(text)
}
const searchrate=(rate)=>{
  setrate(rate)
  }
  return (
    <div>
  
        <div className="App">
    <Header searchtext={searchtext} searchrate={searchrate}/>
    <MovieList film={film} text={text} rate={rate}/>
    <AddModal add={add}/>
    
    </div>
    </div>
  )
}

export default Home

