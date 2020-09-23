import React, { useState, useEffect } from "react"; 
import axios from "axios";
import "./Deck.css"; 


function Deck(props){
    const [card, setCard] = useState([]); 
    const [deckId, setDeck_id] = useState(''); 
    const url = "https://deckofcardsapi.com/api/deck/"; 
    const [count, setCount] = useState(0); 
    
    useEffect(function(){
        async function deckUser(){
            console.log('running useEffect******')
            const deckResult = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"); 
            setDeck_id(deckResult.data.deck_id); 
        }
        deckUser()
        
    }, []); 

    function convertToNumber(numStr) {
        if(numStr === "JACK" || numStr === "QUEEN" || numStr === "KING" ){
            return 10; 
        } else if (numStr === "ACE"){
            return (count + 11 <=21 ? 11 : 1)
        } else {
      return Number(numStr);
    }
}
   
    const handleClick = () => {
        // setPlayer1Score(player1Score+1)
        
        if( count > 21){
           alert ("busted!")     
        } else if (count === 21) {
             alert ("you win!!!!!!!")
        } else if (count <= 17 ) {
            // checkWin()
        }

    // const checkWin = () => {
//     if (setPlayer1Score === setPlayer2Score) {
//         alret ("Tie!")
//     } else if (setPlayer1Score >setPlayer2Score) {
//         alret ("{props.player1} Won!")
//     } else if (setPlayer1Score < setPlayer2Score) {
//         alert (" {props.player2} Won!")
    // }
    // setPlayer1IsDone(player1IsDoen)
    // setPlayer2IsDone(player2IsDoen)
    
        async function drawCard() {
            console.log('deckId...', deckId)
            const resultCard = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/`);
            console.log('count...', resultCard.data.cards[0].value);

            const resultCardValueString = resultCard.data.cards[0].value;
            setCount(count => count + convertToNumber(resultCardValueString)); 
            // setCard(resultCard.data); 
            setCard(card => [...card, resultCard.data.cards[0]]); 
            console.log('cards array before update...', card)
            console.log('resultCard.data...', resultCard.data.cards[0])
        }
        drawCard()
    }
    function displayCards(){
        // console.log('this is the current card...', card)
  
        return (
          <div>
              {/* <img src={cardD.image} />
              <p>Count: {cardD.value}</p> */}
                {card.map((c, idx) => {
                    const cardPosition = {'left': (idx * 50) + 'px'}
                    return (
                      <li style={cardPosition} className={'card-display'}><img src={c.image}/> 
                      </li>
                    )
                })}
                
          </div>
        )
    }
  
    return (
        <div>
      
            <div className ='getCard'>{card.length !== 0 && displayCards()} </div>
            <div className ='display'>
            <h1>  ♡  Hello {props.player}  ♡  </h1>

            <p> Count: {count}</p>
            <button className='button' onClick={handleClick}>HIT </button>
            <button className='button' onClick={handleClick===false}>STAY </button>
            {/* {checkWin()} */}
            {/* <div className ='getCard'>{card.length !== 0 && displayCards()} </div> */}
            </div>
        </div>
    )
}
export default Deck;