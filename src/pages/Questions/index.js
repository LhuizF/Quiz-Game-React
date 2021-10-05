import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaArrowRight } from 'react-icons/fa';
import { toast } from 'react-toastify';

import { QuestionContainer, BtnContainer, NextBox, Btn } from './styled';
import Scoreboard from '../../components/Scoreboard';
import * as actions from '../../store/Questions/actions';
import UserInput from '../../components/UserInput';

import axios from '../../service/axios';

const result = [];
// questions é um array de objetos contendo as peguntas
// alternatives é um array contendo as respostas
export default function Questions({ match, history }) {
    const dispatch = useDispatch();
    const { theme } = match.params;
    const [data, setData] = useState();

    useEffect(() => {
        async function getDate() {
            const response = await axios.get(`/themes?path=${theme}`);
            setData(response.data[0]);
        }
        getDate();
    }, [theme]);

    const { name, questions } = data || 'qu';
    // const [questions, setQuestions] = useState([]);
    const [idQuestion, setIdQuestion] = useState(0);
    const [alternatives, setAlternatives] = useState(
        questions[idQuestion].alternatives
    );

    const nick = useSelector((state) => state.questions.nick);
    console.log(questions);
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
        setAlternatives(newAlternatives);
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
            const time = document.getElementById('time').innerText;

            dispatch(actions.NewUser(nick, result, time, name));
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
                                handleSelectedQuestion(alternative.id)
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
