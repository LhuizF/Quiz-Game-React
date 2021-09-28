import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as actions from '../../store/Users/actions';
import { ScoreContainer } from './styled';

export default function Score() {
    const dispatch = useDispatch();
    const score = useSelector((state) => state.questions);

    // user o dispatch(actions.ResetUser()) quando parar de renderizar ees componente
    return (
        <>
            <h1>Pontuação Total</h1>
            <ScoreContainer>{score}</ScoreContainer>
        </>
    );
}
