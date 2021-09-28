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
            <Link to="/">Clique aqui para retornar a Home </Link>
        </div>
    );
}
