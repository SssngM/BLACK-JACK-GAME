// import React, { useState } from 'react';



// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [player1, setPlayer1] = useState('');
//   const [player2, setPlayer2] = useState('');
//   const [curPlayer, setCurPlayer] = useState('p1');


//   const renderLoggedIn = () => {
//     if(isLoggedIn === false ){
//       return (
//         <div>
//           <LoginForms 
//             setIsLoggedIn={setIsLoggedIn} 
//             setPlayer1={setPlayer1}
//             setPlayer2={setPlayer2}
//             player1={player1}
//             player2={player2}
//           /> 
//         </div>
//       )
//     } else{
//       return (
//         <div>
//           <button onClick={() => setIsLoggedIn(false)}>quit</button>
//           <div><Deck2 player={player1} isActive={curPlayer === 'p1'} /></div>
//           <div><Deck2 player={player2} isActive={curPlayer === 'p2'} /></div>
//         </div>
//       )
//     }
//   }

//   return ( 
//     <div>
//      {renderLoggedIn()}
//     </div>
//   );
// }

// export default App;



import React from 'react';
import Game from './Game'


function App() {
  return (
    <div>
      <Game/>
    </div>
  );
}

export default App;
