import React from 'react';
import { Link } from 'react-router-dom';

import { Nav } from './styled';
import logoWhite from '../../assets/img/logo-quiz-white.png';

export default function Header() {
    return (
        <Nav>
            <div>
                <Link to="/">
                    <img src={logoWhite} alt="Logo" />{' '}
                </Link>
                <ul>
                    <li>
                        <Link to="/records">Recordes</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </div>
        </Nav>
    );
}
