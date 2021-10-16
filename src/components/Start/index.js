import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HiUserCircle, HiLockClosed } from 'react-icons/hi';
import { isEmail } from 'validator';
import { toast } from 'react-toastify';

import { MainDiv } from './styled';
import * as actions from '../../store/User/actions';
import { NewQuestion } from '../../store/Question/actions';
import LogoQuiz from '../../assets/img/logo-quiz.png';
import axios from '../../service/axios';

export default function UserInput({ themeId, history }) {
    const dispatch = useDispatch();
    const [nick, setUser] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        async function getQuestions() {
            if (!themeId) return;

            const response = await axios.get(`/questions/${themeId}`);
            const question = response.data;
            if (question.length === 0) {
                toast.error('Algo deu errado');
                history.push('/Quiz-Game-React');
                return;
            }
            dispatch(NewQuestion({ question }));
        }

        getQuestions();
    });
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
