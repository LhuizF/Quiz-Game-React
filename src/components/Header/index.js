import React from 'react';
import { Link } from 'react-router-dom';

import { Nav } from './styled';
import logoWhite from '../../assets/img/logo-quiz-white.png';

export default function Header() {
    return (
        <Nav>
            <div>
                <Link to="/Quiz-Game-React/">
                    <img src={logoWhite} alt="Logo" />
                </Link>
                <ul>
                    <li>
                        <Link to="/Quiz-Game-React/records">Recordes</Link>
                    </li>
                    <li>
                        <Link to="/Quiz-Game-React/login">Login</Link>
                    </li>
                </ul>
            </div>
        </Nav>
    );
}
