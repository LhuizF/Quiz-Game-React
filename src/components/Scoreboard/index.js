import React from 'react';

import { ScoreboardDiv } from './styled';

// import Timer from '../Timer';

export default function Scoreboard({
    user,
    questionsLength,
    idQuestion,
    Timer
}) {
    return (
        <ScoreboardDiv>
            <h2>Placar</h2>
            <div>
                <p>Jogador</p>
                <strong>{user}</strong>
                <p>Perguntas</p>
                <p>
                    {idQuestion + 1}/{questionsLength}
                </p>
                <p>Tempo</p>
                <Timer />
            </div>
        </ScoreboardDiv>
    );
}
