import styled from 'styled-components';
import colors from '../../styles/colors';

export const ScoreContainer = styled.div`
    background-image: linear-gradient(
        to right,
        ${colors.main},
        ${colors.blueLight}
    );
    width: 50%;
    max-width: 800px;
    padding: 30px 60px;
    border-radius: 50px;
    margin-bottom: 20px;

    .header {
        display: flex;
        justify-content: space-between;
        text-align: center;

        h2 {
            font-weight: bold;
        }
        p {
            font-size: 20px;
        }

        @media (max-width: 1060px) {
            flex-direction: column;
        }
    }
`;
