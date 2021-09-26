import styled, { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

import colors from './colors';
import './font.css';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: none;
    }

    body{
        font-family: 'Roboto', sans-serif;
        background-color: ${colors.background};
        color: #fff;
    }

    h1{
        font-size: 60px;
        margin: 40px
    }

    button{
        cursor: pointer;
        border: none;
    }

    a{
        cursor: pointer;
        color: #fff;
        text-decoration: none;
    }

    li{
        list-style: none;
    }
`;

export const Main = styled.main`
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 90vw;
    height: 70vh;
`;

export const MainForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    background-color: ${colors.while};
    padding: 30px 76px;
    border-radius: 30px;
    min-width: 500px;
    margin-top: 30px;

    img {
        width: 165px;
        margin-bottom: 40px;
    }

    .input-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    label {
        display: flex;
        align-items: center;
        background-color: ${colors.main};
        width: 100%;
        box-sizing: border-box;
        padding: 2px 6px;
        border-radius: 12px;
        margin-top: 20px;
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

    .link-container {
        margin: 10px 0;
        display: flex;
        align-items: flex-start;
        width: 100%;
    }

    a {
        color: ${colors.main};
    }
`;
