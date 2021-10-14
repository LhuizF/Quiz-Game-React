import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { HiUserCircle, HiLockClosed } from 'react-icons/hi';
import { isEmail } from 'validator';
import { toast } from 'react-toastify';

import { MainDiv } from './styled';
import * as actions from '../../store/User/actions';
import LogoQuiz from '../../assets/img/logo-quiz.png';

export default function UserInput() {
    const dispatch = useDispatch();
    const [nick, setUser] = useState('');
    const [email, setEmail] = useState('');

    const handleStart = () => {
        if (nick.length < 3 || nick.length > 12) {
            toast.error('Nick deve ter entre 3 a 12 caracteres');
            return;
        }

        if (email && !isEmail(email)) {
            toast.error('Email inválido');
            return;
        }

        dispatch(actions.NewUser({ nick, email }));
    };

    return (
        <>
            <MainDiv>
                <img src={LogoQuiz} alt="Logo" />
                <div className="text-div">
                    <p>
                        Você está prestes a iniciar o quiz, abaixo preencha com
                        seu nome e email (email não obrigatório).
                    </p>
                    <p>
                        Ao clicar em iniciar o tempo será iniciado e você
                        começará a responder às perguntas do tema que
                        selecionou, sua pontuação será o número de acertos vezes
                        100 menos o tempo que gastou para responder todas as
                        perguntas.
                    </p>
                </div>

                <label htmlFor="nick">
                    <HiUserCircle size={28} />
                    <input
                        type="text"
                        placeholder="Digite seu nome aqui"
                        onChange={(e) => setUser(e.target.value)}
                        value={nick}
                    />
                </label>

                <label htmlFor="email">
                    <HiLockClosed size={28} />
                    <input
                        type="email"
                        placeholder="Digite seu email aqui"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </label>

                <button type="button" onClick={handleStart}>
                    Iniciar
                </button>
            </MainDiv>
        </>
    );
}
