const inicialState = {
    user: { nick: '', hits: '', time: '', score: 0 }
};

function verification(hits) {
    const correct = hits.filter((alternative) => {
        return alternative.isTrue && alternative.selected;
    });

    return `${correct.length}/${hits.length}`;
}

function calculateScore(hits, time) {
    const newHits = (hits[0] / hits[2]) * 100;
    console.log(newHits);
}

function QuestionsReducer(state = inicialState, action) {
    switch (action.type) {
        case 'SET_USER': {
            const newState = { ...inicialState };
            newState.user.nick = action.payload.nick;
            if (action.payload.hits) {
                newState.user.hits = verification(action.payload.hits);
                newState.user.time = `${action.payload.time} min`;
                newState.user.score = calculateScore(
                    newState.user.hits,
                    action.payload.time
                );
            }

            return newState;
        }

        case 'RESET_USER': {
            const newState = { ...inicialState };
            newState.user.nick = '';
            newState.user.hits = '';
            return newState;
        }
        default:
            return state;
    }
}

export default QuestionsReducer;
