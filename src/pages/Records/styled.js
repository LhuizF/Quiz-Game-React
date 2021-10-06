import styled from 'styled-components';
import colors from '../../styles/colors';

export const RecordContainer = styled.div`
    background-image: linear-gradient(
        to right,
        ${colors.main},
        ${colors.blueLight}
    );
    width: 50%;
    max-width: 800px;
    padding: 60px;
    border-radius: 50px;

    table {
        width: 100%;
        text-align: center;

        thead {
            font-size: 20px;
        }

        th:first-child,
        td:first-child {
            text-align: start;
        }
    }
`;
