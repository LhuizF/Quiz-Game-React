import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    color: #fff;
    font-size: 30px;

    div {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 1;
        background-color: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    span {
        width: 130px;
        height: 130px;
        border: 10px solid ${colors.main};
        border-top-color: #eaeaea;
        border-radius: 50%;
        animation: gif 1s infinite;
    }

    @keyframes gif {
        to {
            transform: rotate(1turn);
        }
    }
`;
