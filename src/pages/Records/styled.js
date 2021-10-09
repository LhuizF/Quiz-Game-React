import styled from 'styled-components';
import colors from '../../styles/colors';

export const TableContainer = styled.table`
    width: 100%;
    margin: 0 auto;
    max-width: 1000px;
    text-align: center;
    border: 1px solid white;
    border-collapse: collapse;

    th,
    td {
        border: 2px solid white;
        padding: 6px 10px;
    }

    thead {
        font-size: 20px;
        background-image: linear-gradient(
            to right,
            ${colors.main},
            ${colors.blueLight}
        );
    }

    tbody {
        td:first-child {
            background-color: ${colors.main};
            font-weight: bold;
        }

        .ptn-1 {
            background-color: #ffd700 !important;
        }

        .ptn-2 {
            background-color: #c0c0c0 !important;
        }

        .ptn-3 {
            background-color: #cd7f32 !important;
        }
    }

    @media (max-width: 800px) {
        font-size: 10px;

        tbody,
        thead {
            th {
                font-size: 10px;
            }
            th:nth-child(5),
            th:nth-child(7) {
                display: none;
            }
            td:nth-child(5),
            td:nth-child(7) {
                display: none;
            }
        }
    }
`;
