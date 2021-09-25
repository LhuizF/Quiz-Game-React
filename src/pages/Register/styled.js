import styled from 'styled-components';
import colors from '../../styles/colors';

export const Button = styled.button`
    width: 60%;
    height: 30px;
    color: #fff;
    border-radius: 12px;
    font-size: 16px;
    transition: all 0.3s;
    position: relative;
    overflow: hidden;
    z-index: 1;
    margin-top: 10px;
    background-image: linear-gradient(to right, ${colors.main}, #6d93df);

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
`;

export const Div = styled.div`
    margin-top: 30px;
    background-color: ${colors.while};
    box-sizing: border-box;
    min-width: 500px;
    padding: 18px;
    text-align: center;
    border-radius: 20px;

    p {
        color: ${colors.main};
    }

    a {
        color: ${colors.main};
    }
`;
