import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaArrowRight } from 'react-icons/fa';
import { toast } from 'react-toastify';

import { QuestionContainer, BtnContainer, NextBox, Btn } from './styled';
import Scoreboard from '../../components/Scoreboard';
import * as actions from '../../store/Questions/actions';
import UserInput from '../../components/UserInput';
import axios from '../../service/axios';

import NextButton from '../../components/NextButton';

export default function Questions({ match, history }) {
    const { theme } = match.params;

    const [data, setData] = useState(() => {
        async function getDate() {
            const response = await axios.get(`/themes?path=${theme}`);
            setData(response.data[0]);
        }
        getDate();
    });

    const themeName = data ? data.name : '';
    const questions = useMemo(() => (data ? data.questions : []), [data]);
    const [idQuestion, setIdQuestion] = useState(0);
    const [alternatives, setAlternatives] = useState([]);

    useEffect(() => {
        setAlternatives(data ? questions[idQuestion].alternatives : []);
    }, [data, idQuestion, questions]);

    const nick = useSelector((state) => state.questions.nick);

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

    if (!nick) {
        return <UserInput />;
    }

    return (
        <>
            <h1>{themeName}</h1>
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
            <NextButton
                alternatives={alternatives}
                idQuestion={idQuestion}
                questions={questions}
                setIdQuestion={setIdQuestion}
                history={history}
                themeName={themeName}
            />
            {/* <NextBox>
                <button type="button" onClick={handleNextQuestion}>
                    <FaArrowRight size={24} />
                </button>
            </NextBox> */}
        </>
    );
}
