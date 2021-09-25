import styled from 'styled-components';

import colors from '../../styles/colors';

export const Nav = styled.nav`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 60px;
    background-image: linear-gradient(
        to right,
        ${colors.main},
        ${colors.blueLight}
    );
    border-radius: 0% 0% 150% 150%;

    div {
        display: flex;
        justify-content: space-between;
        width: 80%;
        height: fit-content;
    }

    img {
        width: 40px;
    }

    ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 20%;
    }

    li {
        font-size: 22px;

        &:hover {
            text-decoration: underline;
        }
    }
`;
