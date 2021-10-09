import styled from 'styled-components';
import colors from '../../styles/colors';

export const Themes = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 750px;
    flex-wrap: wrap;

    @media (max-width: 800px) {
        flex-direction: column;
        width: 90%;

        a,
        div {
            width: 100%;
        }
    }
`;

export const QuestionDisplay = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
    background-color: ${colors.while};
    margin: 15px;
    border-radius: 15px;
    padding: 20px;
    width: 320px;
    cursor: pointer;

    &:hover {
        background-color: ${colors.main};
        transform: scale(1.05);
    }

    img {
        width: 280px;
        height: 190px;
        border-radius: 15px;
        object-fit: cover;
    }

    h2 {
        font-size: 30px;
        color: #000;
        text-align: center;
    }

    @media (max-width: 800px) {
        margin: 0 0 20px;
        flex-direction: row;

        img {
            width: 50%;
            height: 40%;
        }

        h2 {
            margin-left: 10px;
            font-size: 20px;
        }
        &:hover {
            transform: none;
        }
    }
`;
