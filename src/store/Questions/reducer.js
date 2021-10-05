const inicialState = {
    nick: '',
    theme: '',
    hits: '',
    time: '',
    score: 0
};

function verification(hits) {
    const correct = hits.filter((alternative) => {
        return alternative.isTrue && alternative.selected;
    });

    return `${correct.length}/${hits.length}`;
}

function calculateScore(hits, time) {
    const newDits = hits.split('/')[0] * 100;
    const timeSeg = Number(time.slice(0, 2)) * 60 + Number(time.slice(-2));
    const score = newDits - timeSeg;

    return score;
}

function QuestionsReducer(state = inicialState, action) {
    switch (action.type) {
        case 'SET_USER': {
            const newState = { ...inicialState };
            newState.nick = action.payload.nick;
            if (action.payload.hits) {
                newState.hits = verification(action.payload.hits);
                newState.time = action.payload.time;
                newState.theme = action.payload.theme;
                newState.score = calculateScore(
                    newState.hits,
                    action.payload.time
                );
            }

            return newState;
        }

        case 'RESET_USER': {
            const newState = { ...inicialState };
            console.log(newState);
            return newState;
        }
        default:
            return state;
    }
}

export default QuestionsReducer;
