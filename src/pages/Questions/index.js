import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaArrowRight } from 'react-icons/fa';
import { toast } from 'react-toastify';

import { QuestionContainer, BtnContainer, NextBox, Btn } from './styled';
import Scoreboard from '../../components/Scoreboard';
import * as actions from '../../store/Questions/actions';
import UserInput from '../../components/UserInput';

import ApiQuestions from '../../mocks/questions.json';

const result = [];

export default function Questions({ match, history }) {
    const dispatch = useDispatch();
    const { theme } = match.params;
    const { name, questions } = ApiQuestions[theme];

    const [idQuestion, setIdQuestion] = useState(0);
    const [alternatives, setAlternative] = useState(
        questions[idQuestion].alternatives
    );

    const nick = useSelector((state) => state.questions.user.nick);

    useEffect(() => {
        // console.log('passou no useEffect');
        setAlternative(questions[idQuestion].alternatives);
    }, [questions, idQuestion]);

    const handleSelectedQuestion = (id) => {
        const newAlternatives = alternatives.map((alternative) => {
            alternative.selected = false;

            if (alternative.id === id) {
                return {
                    ...alternative,
                    selected: true
                };
            }

            return alternative;
        });
        setAlternative(newAlternatives);
    };

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
            dispatch(actions.NewUser(nick, result));
            result.length = 0;
            history.push('/score');
        }
    };

    if (!nick) {
        return <UserInput />;
    }

    return (
        <>
            <h1>{name}</h1>
            <Scoreboard
                user={nick}
                questionsLength={questions.length}
                idQuestion={idQuestion}
            />
            <QuestionContainer>
                <p>{questions[idQuestion].text}</p>
                <BtnContainer>
                    {alternatives.map((alternative) => (
                        <Btn
                            key={alternative.id}
                            selected={alternative.selected}
                            onClick={() =>
                                handleSelectedQuestion(
                                    alternative.id,
                                    alternative.selected
                                )
                            }
                        >
                            {alternative.option}
                        </Btn>
                    ))}
                </BtnContainer>
            </QuestionContainer>
            <NextBox>
                <button type="button" onClick={handleNextQuestion}>
                    <FaArrowRight size={24} />
                </button>
            </NextBox>
        </>
    );
}

// dividir em mais componentes aaaaaaaaaaaaa
