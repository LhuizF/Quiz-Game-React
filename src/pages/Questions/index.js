import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { QuestionContainer, BtnContainer, MainQuestion, Btn } from './styled';
import Scoreboard from '../../components/Scoreboard';
import Start from '../../components/Start';
import NextButton from '../../components/NextButton';
import axios from '../../service/axios';

export default function Questions({ match, history }) {
    const { theme } = match.params;

    const [themeName, setThemeName] = useState('');
    const [questions, setQuestions] = useState([]);
    const [idQuestion, setIdQuestion] = useState(0);
    const [alternatives, setAlternatives] = useState([]);

    useEffect(() => {
        async function getDate() {
            const { data } = await axios.get(`/themes/${theme}`);
            setThemeName(data[0].name);
            setQuestions(data[0].questions);
            setAlternatives(data[0].questions[idQuestion].alternatives);
        }
        getDate();
    }, [theme, idQuestion]);

    const { nick } = useSelector((state) => state.user);

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
        return <Start />;
    }

    return (
        <MainQuestion>
            <h1>{themeName}</h1>
            <Scoreboard
                user={nick}
                questionsLength={questions.length}
                idQuestion={idQuestion}
            />
            <QuestionContainer>
                <p>{questions[idQuestion].text}</p>
                {questions[idQuestion].img ? (
                    <img src={questions[idQuestion].img} alt="" />
                ) : (
                    ''
                )}
                <BtnContainer>
                    {alternatives.map((alternative) => (
                        <Btn
                            key={alternative.id}
                            selected={alternative.selected}
                            onClick={() =>
                                handleSelectedQuestion(alternative.id)
                            }
                        >
                            {alternative.text}
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
                theme={[theme, themeName]}
            />
        </MainQuestion>
    );
}
