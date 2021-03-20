import React, { useEffect } from 'react';
import './quiz.css';

const Quiz = props => {

    useEffect(() => {

        const params = new URLSearchParams(window.location.search);
        const query = params.get('q')
        console.log(query)
    }, [])


    const GameModes = props => {
        return (
            <div className="game_mode">
                
            </div>
        )
    }


    return (
        <div className="quiz_wrapper">
            <h1>Quiz game</h1>
        </div>

    )
}
export default Quiz;