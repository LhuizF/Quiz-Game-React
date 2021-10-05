export function NewUser(nick, result, time, theme) {
    return {
        type: 'SET_USER',
        payload: {
            nick,
            theme,
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
