import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { toast } from 'react-toastify';
import { Container } from './styled';
import * as actions from '../../store/Questions/actions';

export default function UserInput() {
    const dispatch = useDispatch();
    const [nick, setUser] = useState('');

    const handleStart = () => {
        if (nick.length < 3 || nick.length > 12) {
            toast.error('Nick deve ter entre 3 a 12 caracteres');
            return;
        }
        dispatch(actions.NewUser(nick));
    };

    return (
        <>
            <h1>Digite seu nome</h1>
            <Container>
                <input
                    type="text"
                    placeholder="Digite seu nome aqui"
                    onChange={(e) => setUser(e.target.value)}
                    value={nick}
                />
                <button type="button" onClick={handleStart}>
                    Iniciar
                </button>
            </Container>
        </>
    );
}
