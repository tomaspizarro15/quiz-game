import React, { Fragment, useEffect, useState } from 'react';
import './gameMode.css'
import Skull from './skull_icon.png'
import Angry from './angry_icon.png'
import Smile from './smile_icon.png'
import { useHistory } from 'react-router';
const GameMode = props => {


    const [selectedMode, setSelectedMode] = useState("");
    const [gameModes, setGameModes] = useState([
        {
            label: 'Simple Game',
            key: 'easy',
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
            key: 'rapid',
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
            key: 'death',
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
    let classes = {
        gameMode: 'game_mode'
    }
    const history = useHistory();
    const playButton = () => {
        history.replace('/quiz')
    }

    return (
        <Fragment>
            <ul className="game_list">{gameModes.map((mode, i) => {
                return (
                    <div key={mode.label} className="game_mode__wrap" onClick={() => setSelectedMode(mode.label)}>
                        <li className={selectedMode === mode.label ? "game_mode selected" : classes.gameMode} style={{ animationDelay: `${100 * i}ms` }}>
                            <h1 className="game_mode__title">{mode.label}</h1>
                            <img className="game_mode__icon" src={mode.icon}></img>
                            <p>{mode.info}</p>
                        </li>
                    </div>
                )
            })}</ul>
            <button className="home_button" onClick={() => { playButton() }} disabled={!selectedMode ? true : false}>Play  {selectedMode}</button>
        </Fragment>
    )
}

export default GameMode;