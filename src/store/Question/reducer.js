const setQuestionSelected = (questions, id) => questions[id];
const setAlternatives = (selected) => selected.alternatives;

const setId = (questions, id) => {
    if (id < questions.length - 1) {
        return id + 1;
    }

    return id;
};

const inicialState = {
    id: 0,
    questions: {},
    questionSelected: [],
    alternatives: []
};

function QuestionReducer(state = inicialState, action) {
    switch (action.type) {
        case 'SET_QUESTION': {
            const newState = { ...state };
            newState.questions = action.payload.question;
            newState.questionSelected = setQuestionSelected(
                newState.questions,
                newState.id
            );
            newState.alternatives = setAlternatives(newState.questionSelected);
            return newState;
        }

        case 'NEW_ALTERNATIVE': {
            const newState = { ...state };
            newState.alternatives = action.payload;
            return newState;
        }

        case 'SET_ALTERNATIVE': {
            const newState = { ...state };
            newState.id = setId(newState.questions, newState.id);
            newState.questionSelected = setQuestionSelected(
                newState.questions,
                newState.id
            );
            newState.alternatives = setAlternatives(newState.questionSelected);
            return newState;
        }

        case 'RESET_QUESTION': {
            const newState = { ...inicialState };
            return newState;
        }
        default:
            return state;
    }
}

export default QuestionReducer;
