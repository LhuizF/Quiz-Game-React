export function NewUser(nick, result, time) {
    return {
        type: 'SET_USER',
        payload: {
            nick,
            hits: result,
            time,
            score: 0
        }
    };
}

export function ResetUser() {
    return {
        type: 'RESET_USER',
        payload: {}
    };
}
