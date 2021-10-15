import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaArrowRight } from 'react-icons/fa';
import { toast } from 'react-toastify';

import { NewUser } from '../../store/User/actions';
import { SetAlternative, ResetQuestion } from '../../store/Question/actions';
import QuestionContainer from '../QuestionContainer';
import { NextBox } from './styled';

export default function NextButton({ history, theme }) {
    const dispatch = useDispatch();
    const [result, setResult] = useState([]);

    const { nick, email } = useSelector((state) => state.user);
    const { questions, alternatives } = useSelector((state) => state.question);

    const handleNextQuestion = () => {
        const response = alternatives.filter(
            (alternative) => alternative.selected
        )[0];

        if (!response) {
            toast.warning('Selecione uma alternativa!');
            return;
        }
        result.push(response);

        dispatch(SetAlternative());
        if (result.length === questions.length) {
            const time = document.getElementById('time').innerText;
            dispatch(NewUser({ nick, email, result, time, theme }));
            setResult([]);
            history.push('/Quiz-Game-React/score');
        }
    };

    return (
        <>
            <QuestionContainer questions={questions} />
            <NextBox>
                <button type="button" onClick={handleNextQuestion}>
                    <FaArrowRight size={24} />
                </button>
            </NextBox>
        </>
    );
}
