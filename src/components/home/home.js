import React, { useEffect, useState } from 'react';
import GameMode from './game_mode/gameMode';
import './home.css';

const Home = () => {
    return (
        <div className="home">
            <h1 className="home_title">Lets Play</h1>
            <GameMode/>
        </div>
    )
}
export default Home