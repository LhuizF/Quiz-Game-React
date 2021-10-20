import styled from 'styled-components';
import colors from '../../styles/colors';

export const TableContainer = styled.table`
    margin: 0 auto;
    text-align: center;
    border: 1px solid white;
    border-collapse: collapse;
    max-width: 1100px;
    width: 90%;

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

    select {
        border: none;
        text-align: center;
        width: 80%;
        font-family: inherit;
        font-size: 16px;
        box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 800px) {
        tbody,
        thead {
            th {
                font-size: 14px;
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

    @media (max-width: 500px) {
        tbody,
        thead {
            th,
            td {
                font-size: 12px;
                padding: 3px 5px;
            }
        }

        select {
            font-size: 10px;
        }
    }
`;
