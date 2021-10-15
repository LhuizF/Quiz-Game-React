import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useLocation } from 'react-router-dom';
import { ScoreContainer } from './styled';
import { ResetUser } from '../../store/User/actions';
import { ResetQuestion } from '../../store/Question/actions';
import axios from '../../service/axios';

export default function Score() {
    const dispatch = useDispatch();
    const location = useLocation();
    const { nick, theme, hits, time, score } = useSelector(
        (state) => state.user
    );
    useEffect(() => {
        async function postRecord() {
            await axios.post('/records', {
                nick,
                theme,
                hits,
                time,
                score
            });
        }

        if (nick) {
            postRecord();
        }

        return () => {
            if (location !== '/score') {
                dispatch(ResetUser());
                dispatch(ResetQuestion());
            }
        };
    }, [location, dispatch, nick, theme, hits, time, score]);

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
                        <h2>Tema</h2>
                        <p>{theme[1]}</p>
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
