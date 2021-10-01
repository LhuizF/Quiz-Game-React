import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useLocation } from 'react-router-dom';
import { ScoreContainer } from './styled';
import * as actions from '../../store/Questions/actions';

export default function Score() {
    const dispatch = useDispatch();
    const location = useLocation();
    const { nick, hits, time, score } = useSelector(
        (state) => state.questions.user
    );

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
                <div className="header">
                    <div>
                        <h2>Nome</h2>
                        <p>{nick}</p>
                    </div>

                    <div>
                        <h2>Acertos</h2>
                        <p>{hits}</p>
                    </div>

                    <div>
                        <h2>Tempo</h2>
                        <p>{time}</p>
                    </div>
                    <div>
                        <h2>Pontuação</h2>
                        <p>{score}</p>
                    </div>
                </div>
            </ScoreContainer>
        </>
    );
}
