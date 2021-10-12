import React from 'react';
import { Link } from 'react-router-dom';

export default function Page404() {
    return (
        <div
            style={{
                textAlign: 'center',
                fontSize: '30px'
            }}
        >
            <h1>Pagina não encontrada</h1>
            <Link to="/Quiz-Game-React/">
                Clique aqui para retornar a Home.
            </Link>
        </div>
    );
}
