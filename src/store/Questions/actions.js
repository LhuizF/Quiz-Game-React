export function NewUser({ nick, email, result, time, themeName }) {
    return {
        type: 'SET_USER',
        payload: {
            nick,
            theme: themeName,
            hits: result,
            time,
            score: 0,
            email
        }
    };
}

export function ResetUser() {
    return {
        type: 'RESET_USER',
        payload: {}
    };
}
