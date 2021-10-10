import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { FaArrowRight } from 'react-icons/fa';
import { toast } from 'react-toastify';
import * as actions from '../../store/Questions/actions';
import { NextBox } from './styled';

const result = [];

export default function NextButton({
    alternatives,
    idQuestion,
    questions,
    setIdQuestion,
    history,
    themeName,
    setAlternatives
}) {
    const dispatch = useDispatch();

    const { nick, email } = useSelector((state) => state.questions);

    const handleNextQuestion = () => {
        const response = alternatives.filter(
            (alternative) => alternative.selected
        )[0];

        if (!response) {
            toast.warning('Selecione uma alternativa!');
            return;
        }
        result.push(response);

        if (idQuestion < questions.length - 1) {
            setIdQuestion(idQuestion + 1);
        } else {
            // Final
            const time = document.getElementById('time').innerText;

            dispatch(actions.NewUser({ nick, email, result, time, themeName }));
            result.length = 0;
            history.push('/score');
        }
    };

    return (
        <NextBox>
            <button type="button" onClick={handleNextQuestion}>
                <FaArrowRight size={24} />
            </button>
        </NextBox>
    );
}
