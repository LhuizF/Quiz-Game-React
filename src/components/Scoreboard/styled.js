import styled from 'styled-components';
import colors from '../../styles/colors';

export const ScoreboardDiv = styled.div`
    border-radius: 10px;
    overflow: hidden;
    position: absolute;
    top: 10%;
    right: 5%;

    h2 {
        background-image: linear-gradient(
            to right,
            ${colors.main},
            ${colors.blueLight}
        );
        width: 150px;
        padding-top: 10px;
        text-align: center;
        border: none;
    }

    div {
        background-color: ${colors.while};
        padding: 4px 0;
        width: 100%;
        color: #000;
        text-align: center;
    }

    @media (max-width: 800px) {
        top: 70px;
        width: 90%;
        margin: 0 auto;

        h2 {
            width: 100%;
        }

        div {
            display: flex;
            justify-content: space-around;
        }
    }
`;
