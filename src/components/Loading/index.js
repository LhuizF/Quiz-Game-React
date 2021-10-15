import React from 'react';

import { Container } from './styled';

export default function Loading({ isLoading }) {
    if (!isLoading) return <></>;
    return (
        <Container>
            <div>
                <span />
                <p>Carregando</p>
            </div>
        </Container>
    );
}
