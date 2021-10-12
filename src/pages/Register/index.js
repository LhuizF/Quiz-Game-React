import React from 'react';
import { Link } from 'react-router-dom';
import { HiUserCircle, HiLockClosed, HiOutlineMail } from 'react-icons/hi';

import { MainForm } from '../../styles/GlobalStyles';
import { Div, Button } from './styled';
import LogoQuiz from '../../assets/img/logo-quiz.png';

export default function Register() {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    };
    return (
        <>
            <MainForm onSubmit={handleSubmit}>
                <img src={LogoQuiz} alt="Logo" />
                <div className="input-container">
                    <label htmlFor="Nome">
                        <HiUserCircle size={28} />
                        <input type="text" placeholder="Nome" />
                    </label>

                    <label htmlFor="Email">
                        <HiOutlineMail size={28} />
                        <input type="email" placeholder="Email" />
                    </label>

                    <label htmlFor="password">
                        <HiLockClosed size={28} />
                        <input type="password" placeholder="Senha" />
                    </label>

                    <label htmlFor="password">
                        <HiLockClosed size={28} />
                        <input
                            type="password"
                            placeholder="Confirmar a senha"
                        />
                    </label>

                    <Button type="submit">Entrar</Button>
                </div>
            </MainForm>

            <Div>
                <p>
                    Já possui conta?
                    <Link to="/Quiz-Game-React/login"> Faça login </Link>
                </p>
            </Div>
        </>
    );
}
