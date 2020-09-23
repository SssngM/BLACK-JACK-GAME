import React, { useState, useEffect } from "react"; 
import axios from "axios";
import "./Deck.css"



function Deck(){
    const [cards, setCards] = useState([]); 
    const [deckId, setDeckId] = useState(''); 
    let url = "https://deckofcardsapi.com/api/deck/"

    useEffect(function(){
        async function deckUser() {
            console.log('running useEffect************************...')
            const deckResult = await axios.get(
                "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");  
            
            setDeckId(deckResult.data.deck_id);  
        }
        deckUser()
    }, []);
    
    const handleClick = () => {
        if  (cards.length >= 52 ) {
          return alert ("no more cards");
        } 
      

        async function drawCard() {
            const newCard = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/`) // [{}]
        // cards = []
        console.log('...', newCard.data.cards[0]); // {}
        console.log('cards array before update...', cards)
        setCards(cards => [...cards, newCard.data.cards[0]]); // [{}, {}...]
        // cards [{}]
        //setDectId
        }

        drawCard()
    }
   

    function displayCards() {
        let x = Math.random() * 40-20;
        let y = Math.random() * 40-10;
        let transform = `translate(${x}px, ${y}px)` 
        return (
            <ul >
                {cards.map((card) => (
                    <li className={'card-display'}><img style={{transform:transform}} src={card.image}/> 
                    <p>Count: {card.value}</p>
                    </li>

               
                ))}
            </ul>
        )
    }


    return (
        <div className ='display'>
            <h1> ☆ Card Dealer ☆ </h1>
            <button 
              className='button' 
              onClick={handleClick}>New Card</button>
            <div className ='getCard'>{cards.length !== 0 && displayCards()}</div>
        </div>
    )
}

export default Deck; 