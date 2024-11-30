import { useState } from 'react'
import './App.css'
import qutoes from './quotes.json'
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
      <h1 id="text">
        {quote.quote}
      </h1>
      <h4 id="author">
        {quote.author}
      </h4>
      <button id="new-quote" onClick={handleButtonClick}>Get new quote</button>
      <a href="twitter.com/intent/tweet" id="tweet-quote" target="_top" >tweet</a>
     </div> 
    </div>
    
  )
}

export default App
