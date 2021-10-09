import styled from 'styled-components';

import colors from '../../styles/colors';

export const FooterDiv = styled.footer`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 32px;
    background-image: linear-gradient(
        to right,
        ${colors.main},
        ${colors.blueLight}
    );

    @media (max-width: 800px) {
        position: relative;
    }
`;
