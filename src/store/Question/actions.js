export function NewQuestion(payload) {
    return {
        type: 'SET_QUESTION',
        payload
    };
}

export function NewAlternative(payload) {
    return {
        type: 'NEW_ALTERNATIVE',
        payload
    };
}
export function SetAlternative() {
    return {
        type: 'SET_ALTERNATIVE',
        payload: {}
    };
}

export function ResetQuestion() {
    return {
        type: 'RESET_QUESTION',
        payload: {}
    };
}
