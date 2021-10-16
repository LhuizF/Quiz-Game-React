import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { MainContainer, BtnContainer, Btn } from './styled';

import * as actions from '../../store/Question/actions';

export default function QuestionContainer() {
    const { alternatives, questionSelected } = useSelector(
        (state) => state.question
    );

    const dispatch = useDispatch();
    const handleSelectedQuestion = (id) => {
        const selected = alternatives.map((alternative) => {
            alternative.selected = false;
            if (alternative.id === id) {
                return {
                    ...alternative,
                    selected: true
                };
            }
            return alternative;
        });
        dispatch(actions.NewAlternative(selected));
    };
    return (
        <MainContainer>
            <p>{questionSelected.text}</p>
            {questionSelected.img ? (
                <img src={questionSelected.img} alt="" />
            ) : (
                ''
            )}
            <BtnContainer>
                {alternatives.map((alternative) => (
                    <Btn
                        key={alternative.id}
                        selected={alternative.selected}
                        onClick={() => handleSelectedQuestion(alternative.id)}
                        text={alternative.text}
                    >
                        {alternative.text}
                    </Btn>
                ))}
            </BtnContainer>
        </MainContainer>
    );
}
