import styled from 'styled-components';
import colors from '../../styles/colors';

export const TableContainer = styled.div`
    width: 80%;
    max-width: 1000px;

    table {
        width: 100%;
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

                &:nth-child(2) {
                    text-align: start;
                }
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
    }
`;
