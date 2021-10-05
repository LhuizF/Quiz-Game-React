import styled from 'styled-components';
import colors from '../../styles/colors';

export const QuestionContainer = styled.div`
    background-color: ${colors.while};
    width: 50%;
    max-width: 600px;
    padding: 20px;
    border-radius: 30px;

    p {
        font-size: 24px;
        text-align: center;
        color: #000;
    }
`;

export const BtnContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 10px 20px;
`;

export const Btn = styled.button`
    width: 35%;
    height: 48px;
    border-radius: 12px;
    background-color: ${colors.blueDark};
    margin-top: 10px;
    color: #fff;
    box-shadow: rgb(0 0 0 / 30%) 0px -4px inset;
    font-size: 20px;
    font-weight: bold;

    ${(props) => {
        if (props.selected) {
            return `
            height: 44px;
            margin-top: 14px;
            box-shadow: none;
            filter: brightness(0.65);
            `;
        }

        return `
        &:hover {
            height: 46px;
            margin-top: 12px;
            box-shadow: rgb(0 0 0 / 25%) 0px -2px inset;
        }
        &:active {
            height: 44px;
            margin-top: 14px;
            box-shadow: none;
        }`;
    }}
`;

export const NextBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    max-width: 600px;
    width: 50%;
    margin: 10px;

    button {
        background-color: ${colors.success};
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        width: 62px;
        height: 42px;
        color: #fff;
        box-shadow: rgb(53, 106, 53) 0px 4px 0px 0px;

        &:hover {
            height: 42px;
            margin-top: 2px;
            box-shadow: rgb(53, 106, 53) 0px 2px 0px 0px;
        }

        &:active {
            height: 42px;
            margin-top: 4px;
            box-shadow: none;
        }
    }
`;
