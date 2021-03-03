import React, { useEffect, useState } from 'react';
import GameMode from './game_mode/gameMode';
import './home.css';
import Skull from './game_mode/skull_icon.png'
import Angry from './game_mode/angry_icon.png'
import Smile from './game_mode/smile_icon.png'
const Home = () => {

    const [gameModes, setGameModes] = useState([
        {
            label: 'Simple Game',
            info: 'Select this mode if you want a challenge of Quiz. errors wont !',
            selected: false,
            displayed: false,
            icon: Smile,
            settings: {
                time: 30,
                options: 5,
                questions: 10,
                allowErrors: 10,
            }
        },
        {
            label: 'Rapid Game',
            info: 'Select this mode if you want a challenge of Quiz, You have 3 chances',
            selected: false,
            displayed: false,
            icon: Angry,
            settings: {
                time: 30,
                options: 5,
                questions: 10,
                allowErrors: 2,
            }
        },
        {
            label: 'Death Game',
            info: 'Select this mode if you want a challenge of Quiz. One error will make you lose!',
            selected: false,
            displayed: false,
            icon: Skull,
            settings: {
                time: 15,
                options: 5,
                questions: 15,
                allowErrors: 0,
            }
        },
    ])

    const [SelectedMode, setSelectedMode] = useState({})



    return (
        <div className="home">
            <h1 className="home_title">Lets Play</h1>
            <GameMode mode={gameModes} hover={() => { setSelectedMode() }} />
            <button className="home_button">Play : {SelectedMode.label}</button>
        </div>
    )
}

export default Home