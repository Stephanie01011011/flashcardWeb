import React, { useEffect, useState } from 'react'
import Nav from './Nav';
import Footer from './Footer';
import '../styles/styles.css';

//rfce
function Home() {
  let german = {
    "Guten Tag": "Hello", 
    "Das ist gut.": "That is good.", 
    "Das Auto": "The car", 
    "Shwartz": "Black", 
    "Wir Essen": "We are eating",
    "Sie liest": "She is reading",
    "Er mann koch": "The man is cooking",
    "Was ist das": "What is that",
    "Der Apfel ist rot": "The apple is red",
    "Die kinder schreiben": "The kids are writing"
  }
  let germanWords = Object.keys(german);
  //To get the german word to display you would select germanWords[4]

  //count keeps track of which word to display
  const [count, setCount] = useState(0);
  const [card1, setCard1] = useState("");
  const [card2, setCard2] = useState("");
  const [card3, setCard3] = useState("");
  const [card4, setCard4] = useState("");

  let englishWords = Object.values(german);

  let setCards = () => {
   
    let cards = [englishWords[count], 
  englishWords[Math.floor(Math.random() * ((germanWords.length - 1) - 1 + 1) + 1)],
  englishWords[Math.floor(Math.random() * ((germanWords.length - 1) - 1 + 1) + 1)],
  englishWords[Math.floor(Math.random() * ((germanWords.length - 1) - 1 + 1) + 1)],
];


let shuffled = cards
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

    
   
    
  return shuffled;
   
  }
  
  let cards = setCards();
 useEffect(() => {
  setCard1(cards[0]);
  setCard2(cards[1]);
  setCard3(cards[2]);
  setCard4(cards[3]);
  
 }, [count])
  



  
  return (
    <>
      <Nav />
      <div className="main">
        <h1>{germanWords[count]}</h1>

        <div className="cards">
        <div className="card" style={{"width": "20%"}}>
        <div className="card-body">
    <h3 className="card-title">{card1}</h3>
    </div>
  </div>
<div className="card" style={{"width": "20%"}}>
        <div className="card-body">
    <h3 className="card-title">{card2}</h3>
    </div>
  </div>

  <div class="card" style={{"width": "20%"}}>
        <div class="card-body">
    <h3 class="card-title">{card3}</h3>
    </div>
  </div>

  <div class="card" style={{"width": "20%"}}>
        <div class="card-body">
    <h3 class="card-title">{card4}</h3>
    </div>
  </div>

</div>
<div className="btns">
<button type="button" class="btn btn-light" onClick={() => {
  setCount(count - 1)
  if(count === 0){
    setCount(germanWords.length - 1);
  }
  
  }}>Back</button>

<button type="button" class="btn btn-light" onClick={() => {
  setCount(count + 1)
  if(count > germanWords.length - 2){
    setCount(0);
  }
  
  }}>Next</button>


  </div>
<Footer />
      </div>
     
    </>
  )
}

export default Home;
