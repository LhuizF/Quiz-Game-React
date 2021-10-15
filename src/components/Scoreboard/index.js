import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ScoreboardDiv } from './styled';

export default function Scoreboard({ user }) {
    const { questions, id } = useSelector((state) => state.question);
    const [time, setTime] = useState('00:00');
    const date = (seg) => new Date(seg * 1000).toISOString().substr(14, 5);
    let seg = 0;

    useEffect(() => {
        const interval = setInterval(() => {
            seg++;
            setTime(date(seg));
        }, 1000);

        return () => clearInterval(interval);
    }, [seg]);

    return (
        <ScoreboardDiv>
            <h2>Placar</h2>
            <div>
                <p>Jogador</p>
                <strong>{user}</strong>
                <p>Perguntas</p>
                <p>
                    {id + 1}/{questions.length}
                </p>
                <p>Tempo</p>
                <p id="time">{time}</p>
            </div>
        </ScoreboardDiv>
    );
}
