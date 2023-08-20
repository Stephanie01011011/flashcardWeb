import React from 'react';
import Footer from './Footer';
import Nav from './Nav';
import '../styles/styles.css';
function About() {
  return (
    <>
      <Nav />
        <div className="main">
            <div className="mainText">
            <h1>About Our Company</h1>
            <p id='aboutPara'>We are a small startup focused on bringing the love of 
                language to everyone, for free! Our company started as 
                2 web developers just looking for a way to study without paying a fee or for subscription
                and it turned into an overnight phenomenon when it was mentioned on TikTok. We now have
                over 100,000 users daily studying the german language. New functionality is coming soon, 
                including voice recognition and chat rooms. Thanks for using our site!</p>
                </div>
        <Footer/>   
        </div>
     
    </>
  )
}

export default About
