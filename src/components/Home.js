import React, { useEffect, useState } from 'react'
import Nav from './Nav';
import Footer from './Footer';
import '../styles/styles.css';

import german from '../translations';

//rfce
function Home() {
  let data = german;
  
  let germanWords = Object.keys(data);
  //To get the german word to display you would select germanWords[4]

  //count keeps track of which word to display
  const [count, setCount] = useState(0);
  const [card1, setCard1] = useState("");
  const [card2, setCard2] = useState("");
  const [card3, setCard3] = useState("");
  const [card4, setCard4] = useState("");

  let englishWords = Object.values(data);

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

 let yes = '<i class="fa-solid fa-check fa-md" style="color: #0de331;"></i>';
 let no = '<i class="fa-regular fa-circle-xmark" style="color: #e00000;"></i>';

 let check = (card, num) => {
  if(englishWords[count] === card){
    if(document.getElementById(num).innerHTML === ""){
    document.getElementById(num).innerHTML += yes;
  }
  } else {
    if(document.getElementById(num).innerHTML === ""){
    document.getElementById(num).innerHTML += no;
    }
  }
}

let clearCards = () => {
  document.getElementById('one').innerHTML = "";
  document.getElementById('two').innerHTML = "";
  document.getElementById('three').innerHTML = "";
  document.getElementById('four').innerHTML = "";
}



  
  return (
    <>
      <Nav />
      <div className="germanWord">
      <h1>{germanWords[count]}</h1>
      </div>
      <div className="main">
       

        <div className="cards">
       <div className="card" style={{"width": "20%"}} id="card1" onClick={() => check(card1, 'one')}>
       <div className="card-body">
       <div className="answer" id='one'></div>
    <h3 className="card-title">{card1}</h3>
    </div>
  </div>
<div className="card" style={{"width": "20%"}} id="card2" onClick={() => check(card2, 'two')}>
        <div className="card-body">
          <div className="answer" id='two'></div>
          
    <h3 className="card-title">{card2}</h3>
    </div>
  </div>

  <div class="card" style={{"width": "20%"}} id="card3" onClick={() => check(card3, 'three')}>
        <div class="card-body">
        <div className="answer" id='three'></div>
    <h3 class="card-title">{card3}</h3>
    </div>
  </div>

  <div class="card" style={{"width": "20%"}} id="card4" onClick={() => check(card4, 'four')}>
        <div class="card-body">
        <div className="answer" id='four'></div>
    <h3 class="card-title">{card4}</h3>
    </div>
  </div>

</div>
<div className="btns">
<button type="button" class="btn btn-light" onClick={() => {
  setCount(count - 1);
  clearCards();
  if(count === 0){
    setCount(germanWords.length - 1);
  }
  
  }}>Back</button>

<button type="button" class="btn btn-light" onClick={() => {
  setCount(count + 1)
  clearCards();
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
