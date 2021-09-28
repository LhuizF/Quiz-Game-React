import React from 'react';

import { ScoreboardDiv } from './styled';

export default function Scoreboard({ user, questionsLength, idQuestion }) {
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
                <p>00:00</p>
            </div>
        </ScoreboardDiv>
    );
}
