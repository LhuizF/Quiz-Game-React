import { toast } from 'react-toastify';

let score = 0;

function verification(arr) {
    // eslint-disable-next-line
    for (let response of arr) {
        const { isTrue, selected } = response;

        if (isTrue && selected) {
            score += 1;
        }
    }

    toast.success(`${score} reducer`);
    return score;
}

function QuestionsReducer(state = 0, action) {
    switch (action.type) {
        case 'checkResponses':
            return verification(action.payload);
        default:
            return state;
    }
}

export default QuestionsReducer;