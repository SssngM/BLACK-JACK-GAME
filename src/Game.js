import React, {useState}from 'react';
import Deck2 from "./Deck2"
import LoginForm from "./LoginForms"


  function Game() {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [player1IsReady, setPlayer1IsReady] = useState(false);
    const [player2IsReady, setPlayer2IsReady] = useState(false);    
    const [player1, setPlayer1] = useState('')
    const [player2, setPlayer2] = useState('')
    const [player1Score, setPlayer1Score] = useState(0)
    const [player2Score, setPlayer2Score] = useState(0)
    const [player1IsDone, setPlayer1IsDone ] = useState(true)
    const [player2IsDone, setPlayer2IsDone ] = useState(true)

    function player1View() {
      if(player1IsReady === false ){
        return (
          <div>
            <LoginForm 
            setPlayer={setPlayer1} 
            setPlayerIsReady={setPlayer1IsReady} 
            player1={player1}
            />
          </div>
        )
      } else {
        return (
            <div>
                 {/* <button onClick={() => setPlayer1IsReady(false)}>quit</button> */}
                 <div>
                    <Deck2 
                    player={player1} 
                    player1Score={player1Score}
                    player1IsDone={player1IsDone}
                    />
                </div>
            </div>
            
        )
      }
    }
    
    function player2View() {
      if(player2IsReady === false ){
        return (
          <div>
            <LoginForm 
            setPlayer={setPlayer2} 
            setPlayerIsReady={setPlayer2IsReady} 
            />
          </div>
        )
      } else {
        return (
          <div> 
              <Deck2 
              player={player2} 
              player2Score={player2Score}
              player2IsDone={player2IsDone}
              /> 
          </div>
        )
      }
    }

    const renderLoggedIn = () =>{
      return (
        <div>
          {player1View()}
          {player2View()}
        </div>
      ) 
    }

  return ( 
    <div>
    
     {renderLoggedIn()}
  
    </div>
  
  );
}

export default Game;
