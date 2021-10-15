const inicialState = {
    nick: '',
    theme: [],
    hits: '',
    time: '',
    score: 0,
    email: ''
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

    if (score < 0) {
        return 0;
    }

    return score;
}

function UserReducer(state = inicialState, action) {
    switch (action.type) {
        case 'SET_USER': {
            const newState = { ...state };
            newState.nick = action.payload.nick;
            newState.email = action.payload.email;
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
            return newState;
        }
        default:
            return state;
    }
}

export default UserReducer;
