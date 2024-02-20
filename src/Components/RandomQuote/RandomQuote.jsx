import React, { useState } from 'react'
import './RandomQuote.css'
import twitter_icon from '../Assets/twitter.png';
import reload_icon from '../Assets/reload.png';

const RandomQuote = () => {

    let quotes =[];

    async function loadQuotes(){
        const response = await fetch("https://type.fit/api/quotes");
        quotes = await response.json();
    }
    
    const random =() =>{
        const select = quotes[Math.floor(Math.random()*quotes.length)];
        setQuote(select);
    }

    const twitter = () =>{
        window.open(`https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author.split(',')[0]}`);
    }
    const[quote,setQuote] = useState({
        text: "Difficulties increase the nearer we get to the goal.",
        author: "Johann Wolfgang von Goethe"
    });


    loadQuotes();

  return (
    <div className='Container'> 
        <div className="quote">
            {quote.text}
        </div>
        <div className="line"></div>
        <div className="bottom">
            <div className="author">
                - {quote.author.split(',')[0]}
            </div>
            <div className="icons">
                <img onClick={()=>{random()}} className='image-tag' src={reload_icon} alt="" />
                <img onClick={()=>{twitter()}} className='image-tag' src={twitter_icon} alt="" />
            </div>
        </div>
    </div>
  )
}

export default RandomQuote