import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
    margin-top: 30px;
    background-color: ${colors.while};
    min-width: 400px;
    padding: 28px;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 12px;

    input {
        background-color: ${colors.main};
        border: none;
        width: 70%;
        height: 30px;
        padding: 0 10px;
        border-radius: 10px;
        color: #fff;

        &::placeholder {
            color: #577eeb;
        }
    }

    button {
        height: 30px;
        width: 24%;
        background-image: linear-gradient(to right, ${colors.main}, #6d93df);
        border-radius: 10px;
        color: #fff;
        position: relative;
        z-index: 1;
        overflow: hidden;
        font-weight: bold;

        &:before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0%;
            border-radius: 12px;
            height: 100%;
            background-color: ${colors.main};
            transition: all 0.3s;
            z-index: -1;
        }

        &:hover {
            &:before {
                width: 100%;
            }
        }

        &:active {
            filter: brightness(0.65);
        }
    }
`;

// Que componente feio
