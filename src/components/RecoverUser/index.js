import React from 'react';

import { Container } from './styled';

export default function RecoverUser() {
    return (
        <Container>
            <div className="background">
                <div className="recover-container">
                    <p>Deseja continuar como: Nick?</p>
                    <div className="btn-container">
                        <button type="button">Não</button>
                        <button type="button">Sim</button>
                    </div>
                </div>
            </div>
        </Container>
    );
}
