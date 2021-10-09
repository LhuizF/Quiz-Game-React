import styled from 'styled-components';
import colors from '../../styles/colors';

export const NextBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    max-width: 600px;
    width: 90%;
    margin: 10px;

    button {
        background-color: ${colors.success};
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        width: 62px;
        height: 42px;
        color: #fff;
        box-shadow: rgb(53, 106, 53) 0px 4px 0px 0px;

        &:hover {
            height: 42px;
            margin-top: 2px;
            box-shadow: rgb(53, 106, 53) 0px 2px 0px 0px;
        }

        &:active {
            height: 42px;
            margin-top: 4px;
            box-shadow: none;
        }
    }
`;
