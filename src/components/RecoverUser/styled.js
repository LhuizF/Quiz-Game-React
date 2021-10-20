import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    font-size: 30px;

    .background {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 1;
        background-color: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .recover-container {
        background-color: ${colors.while};
        color: #000;
        border-radius: 15px;
        padding: 40px;
        margin-top: -200px;

        .btn-container {
            display: flex;
            justify-content: space-between;

            button {
                width: 45%;
                height: 48px;
                border-radius: 12px;
                background-color: ${colors.blueDark};
                margin-top: 10px;
                color: #fff;
                box-shadow: rgb(0 0 0 / 30%) 0px -4px inset;
                font-weight: bold;
                font-size: 20px;

                &:hover {
                    height: 46px;
                    margin-top: 12px;
                    box-shadow: rgb(0 0 0 / 25%) 0px -2px inset;
                }
                &:active {
                    height: 44px;
                    margin-top: 14px;
                    box-shadow: none;
                }
            }
        }
    }
`;
