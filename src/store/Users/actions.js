export function NewUser(user) {
    return {
        type: 'SET_USER',
        payload: user
    };
}

export function ResetUser() {
    return {
        type: 'RESET_USER',
        payload: ''
    };
}
