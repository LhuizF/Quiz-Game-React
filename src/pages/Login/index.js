import React from 'react';
import { Link } from 'react-router-dom';
import { HiUserCircle, HiLockClosed } from 'react-icons/hi';

import { MainForm } from '../../styles/GlobalStyles';
import { Div, Button } from './styled';
import LogoQuiz from '../../assets/img/logo-quiz.png';

export default function Login() {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    };
    return (
        <>
            <MainForm onSubmit={handleSubmit}>
                <img src={LogoQuiz} alt="Logo" />
                <div className="input-container">
                    <label htmlFor="Email">
                        <HiUserCircle size={28} />
                        <input type="email" placeholder="Seu email" />
                    </label>

                    <label htmlFor="password">
                        <HiLockClosed size={28} />
                        <input type="password" placeholder="Sua senha" />
                    </label>

                    <div className="link-container">
                        <a href="#a">Esqueceu a senha?</a>
                    </div>

                    <Button type="submit">Entrar</Button>
                </div>
            </MainForm>

            <Div>
                <p>
                    Não tem conta?<Link to="/register"> Cadastre-se </Link>
                </p>
            </Div>
        </>
    );
}

// 577EEB
