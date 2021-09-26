import styled from 'styled-components';
import colors from '../../styles/colors';

export const Themes = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 800px;
    flex-wrap: wrap;
`;

export const QuestionDisplay = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
    background-color: ${colors.while};
    margin: 5px;
    border-radius: 15px;
    padding: 20px;
    width: 320px;
    height: 260px;
    cursor: pointer;

    &:hover {
        background-color: ${colors.main};
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
    }
`;
