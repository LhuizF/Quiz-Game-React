import styled from 'styled-components';
import colors from '../../styles/colors';

export const ScoreContainer = styled.div`
    background-image: linear-gradient(
        to right,
        ${colors.main},
        ${colors.blueLight}
    );
    width: 50%;
    max-width: 600px;
    padding: 60px;
    border-radius: 50px;
    font-size: 100px;
    text-align: center;
`;
