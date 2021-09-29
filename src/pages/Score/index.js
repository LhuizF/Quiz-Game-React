import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useLocation } from 'react-router-dom';
import { ScoreContainer } from './styled';
import * as actions from '../../store/Questions/actions';

export default function Score() {
    const dispatch = useDispatch();
    const location = useLocation();
    const { nick, score } = useSelector((state) => state.questions.user);

    useEffect(() => {
        return () => {
            if (location !== '/score') {
                dispatch(actions.ResetUser());
            }
        };
    }, [location, dispatch]);

    return (
        <>
            <h1>Pontuação Total</h1>
            <ScoreContainer>
                {nick} <br />
                {score}
            </ScoreContainer>
        </>
    );
}
