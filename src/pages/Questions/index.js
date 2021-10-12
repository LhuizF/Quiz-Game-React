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
            const { data } = await axios.get(`/themes`);
            const dataTheme = data.filter((themes) => themes.path === theme)[0];
            setThemeName(dataTheme.name);
            setQuestions(dataTheme.questions);
            setAlternatives(dataTheme.questions[idQuestion].alternatives);
        }
        getDate();
    }, [theme, idQuestion]);

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
                themeName={themeName}
            />
        </MainQuestion>
    );
}
