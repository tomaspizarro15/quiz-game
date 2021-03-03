import React from 'react';

import './gameMode.css'
const GameMode = props => {
    console.log(props)
    const classes = {
        gameMode: 'game_mode'
    }

    return (
        <ul className="game_list">{props.mode.map((mode, i) => {
            return (
                <div key={mode.label} className="game_mode__wrap">
                    <li className={classes.gameMode} style={{ animationDelay: `${100 * i}ms` }}>
                        <h1 className="game_mode__title">{mode.label}</h1>
                        <img className="game_mode__icon" src={mode.icon}></img>
                        <p>{mode.info}</p>
                    </li>
                </div>
            )
        })}</ul>
    )
}

export default GameMode; 