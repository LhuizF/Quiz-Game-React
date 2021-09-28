import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { toast } from 'react-toastify';
import { Container } from './styled';
import * as actions from '../../store/Users/actions';

export default function UserInput() {
    const dispatch = useDispatch();
    const [user, setUser] = useState('');

    const handleStart = () => {
        if (user.length < 4 || user.length > 13) {
            toast.error('Nick deve ter entre 4 a 13 caracteres');
            return;
        }
        dispatch(actions.NewUser(user));
    };

    return (
        <>
            <h1>Digite seu nome</h1>
            <Container>
                <input
                    type="text"
                    placeholder="Digite seu nome aqui"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                />
                <button type="button" onClick={handleStart}>
                    Iniciar
                </button>
            </Container>
        </>
    );
}
