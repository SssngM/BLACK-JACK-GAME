import React, {useState}from 'react';
import Deck2 from "./Deck2"
import LoginForm from "./LoginForms"


  function App() {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [player1IsReady, setPlayer1IsReady] = useState(false);
    const [player2IsReady, setPlayer2IsReady] = useState(false);    
    const [player1, setPlayer1] = useState('')
    const [player2, setPlayer2] = useState('')
    const [player1Score, setplayer1Score] = useState('')
    const [player2Score, setplayer2Score] = useState('')
    const [player1IsDone, setPlayer1IsDone ] = useState(true)
    const [player2IsDone, setPlayer2IsDone ] = useState(true)

    function player1View() {
      if(player1IsReady === false ){
        return (
          <div>
            <LoginForm setPlayer={setPlayer1} setPlayerIsReady={setPlayer1IsReady} />
          </div>
        )
      } else {
        return (
          <div><Deck2 player={player1} /></div>
        )
      }
    }
    
    function player2View() {
      if(player2IsReady === false ){
        return (
          <div>
            <LoginForm setPlayer={setPlayer2} setPlayerIsReady={setPlayer2IsReady} />
          </div>
        )
      } else {
        return (
          <div><Deck2 player={player2} /></div>
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

    // const [items, setItems] = useState();
   
    // const createBox = item => {
    //   let logged = {...item};
    //   setItems(items => [...items, logged]);
    // };

    // const renderLoggedIn = () => {
    //   console.log('items...', items);
    //   return(
    //    <ul>
    //        {items.map(item => (
    //         <Log item={item} />
    //     ))}
    //    </ul>
    //   )
    // }
  return ( 
    <div>
      {/* {<LoginForms/> ? <LoginForms/> : <Deck2/> } */}
     {/* {createBox}  */}
     {renderLoggedIn()}
     {/* <LoginForms/>  */}
     {/* <Deck2/> */}
    </div>
  
  );
}

export default App;
