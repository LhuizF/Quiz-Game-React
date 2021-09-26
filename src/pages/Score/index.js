import React from 'react';
import { useSelector } from 'react-redux';

import { ScoreContainer } from './styled';

export default function Score() {
    const score = useSelector((state) => state.questions);

    return (
        <>
            <h1>Pontuação Total</h1>
            <ScoreContainer>{score}</ScoreContainer>
        </>
    );
}
