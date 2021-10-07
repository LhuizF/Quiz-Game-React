import styled from 'styled-components';
import colors from '../../styles/colors';

export const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    background-color: ${colors.while};
    padding: 30px 76px;
    border-radius: 30px;
    max-width: 550px;
    height: 580px;
    margin-top: 30px;
    color: #000;
    text-align: justify;

    img {
        width: 165px;
        margin-bottom: 40px;
    }

    label {
        display: flex;
        align-items: center;
        background-color: ${colors.main};
        width: 80%;
        box-sizing: border-box;
        padding: 2px 6px;
        border-radius: 12px;
        margin-top: 20px;
        color: #fff;
    }

    input {
        background-color: transparent;
        border: none;
        width: 100%;
        height: 30px;
        color: #fff;
        padding: 0 4px;

        &::placeholder {
            color: #577eeb;
        }
    }

    button {
        background-color: ${colors.main};
        border-radius: 10px;
        width: 40%;
        height: 42px;
        color: #fff;
        box-shadow: ${colors.mainDark} 0px 4px 0px 0px;
        margin-top: 10px;
        font-size: 16px;
        font-weight: bold;

        &:hover {
            height: 42px;
            margin-top: 12px;
            box-shadow: #1b3d9e 0px 2px 0px 0px;
        }

        &:active {
            height: 42px;
            margin-top: 14px;
            box-shadow: none;
        }
    }
`;
