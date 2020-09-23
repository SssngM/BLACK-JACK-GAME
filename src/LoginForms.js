import React, { useState, useEffect } from "react"; 
import axios from "axios";
import "./LoginForms.css"; 


const LoginForm = (props) => {
    // const {} = props; 
    const INITIAL_STATE = { 
        player1: props.player1, 
        player2: props.player2
    }
    const [formData, setFormData] = useState(INITIAL_STATE);
    // const [player1, setPlayer1] = useState(props.player1);

    // const [formData, setFormData] = useState('');



    const handleSubmit = (evt) => {
        console.log(formData)
        evt.preventDefault();
        
        // props.setIsLoggedIn(true)
        props.setPlayer1(formData)
        props.setPlayer2(formData)
        setFormData()
    };
        
        // props.setIsLoggedIn(true)
        // props.setPlayer1(formData.player1)
        // props.setPlayer2(formData.player2)
        // setFormData(INITIAL_STATE)


    const handleChange = evt => {
        console.log(evt.target.value)
        const {name, value} = evt.target;
        setFormData(fData => ({...fData, [name]: value }))
    }


    return (
       <form  onSubmit={handleSubmit}>
        <div className ='displays2'>

            <h1> ☆ Welcome to Black Jack game ☆</h1>
            
            <div className='input'>
                <input
                    id="player"
                    type="text"
                    name="player"
                    placeholder="player"
                    // value={formData.player1}
                    value={formData.player}
                    onChange={handleChange}
                />
            </div>
            {/* <div className='input'>
                <input
                    id="player2"
                    type="text"
                    name="player2"
                    placeholder="player2"
                    value={formData.player2}
                    onChange={handleChange}
                />
            </div> */}
        <button type="submit" className='buttons' > Start!! </button>
      </div>
    </form>
    )

}


export default LoginForm;