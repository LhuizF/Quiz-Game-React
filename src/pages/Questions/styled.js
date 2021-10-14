import styled from 'styled-components';
import colors from '../../styles/colors';

export const QuestionContainer = styled.div`
    background-color: ${colors.while};
    width: 90%;
    max-width: 600px;
    padding: 20px;
    border-radius: 30px;

    p {
        font-size: 24px;
        text-align: center;
        color: #000;
    }

    img {
        width: 100%;
    }
`;

export const BtnContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 10px 20px;

    @media (max-width: 800px) {
        flex-direction: column;

        button {
            width: 100%;
        }
    }
`;

export const Btn = styled.button`
    width: 45%;
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

export const MainQuestion = styled.div`
    @media (max-width: 800px) {
        margin-top: 60px;
    }
`;
