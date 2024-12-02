import { useState } from 'react'
import './App.css'
import qutoes from './quotes.json'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons/faQuoteLeft'
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons'
const getRandomQuote=()=>{
  return qutoes[Math.floor(Math.random()*qutoes.length)]
}
function App() {
  const [quote, setQuotes] = useState(getRandomQuote())
  function handleButtonClick (){
    setQuotes(getRandomQuote());
  }
  return (
    <div className="background">
       <div id="quote-box">
        <div id="quote">   
          <FontAwesomeIcon icon={faQuoteLeft} size='2x'/>     
          <h1 id="text">
            {quote.quote}
          </h1>
          <FontAwesomeIcon icon={faQuoteRight} size='2x'/>
        </div>

        <h4 id="author">
          {quote.author}
        </h4>
        <div className="buttons">
          <button id="new-quote" onClick={handleButtonClick}>Get new quote</button>
          <a href="twitter.com/intent/tweet" id="tweet-quote" target="_top" ><FontAwesomeIcon icon={faTwitter} size='3x'/></a>
        </div>
      </div> 
    </div>
    
  )
}

export default App
