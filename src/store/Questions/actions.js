// export function Finish(result, user) {
//     return {
//         type: 'CHECK_RESULT',
//         payload: {
//             nick: user,
//             score: result
//         }
//     };
// }

export function NewUser(nick = '', result = '') {
    return {
        type: 'SET_USER',
        payload: {
            nick,
            score: result
        }
    };
}

export function ResetUser() {
    return {
        type: 'RESET_USER',
        payload: {}
    };
}
