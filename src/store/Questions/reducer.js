const inicialState = {
    user: { nick: '', score: '' }
};

function verification(score) {
    // eslint-disable-next-line
    const correct = score.filter((alternative) => {
        return alternative.isTrue && alternative.selected;
    });

    return `${correct.length}/${score.length}`;
}

function QuestionsReducer(state = inicialState, action) {
    switch (action.type) {
        case 'SET_USER': {
            const newState = { ...inicialState };
            newState.user.nick = action.payload.nick;
            if (action.payload.score) {
                newState.user.score = verification(action.payload.score);
            }
            return newState;
        }

        case 'RESET_USER': {
            const newState = { ...inicialState };
            newState.user.nick = '';
            newState.user.score = '';
            return newState;
        }
        default:
            return state;
    }
}

export default QuestionsReducer;
