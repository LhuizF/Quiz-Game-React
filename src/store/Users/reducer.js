function UserReducer(state = '', action) {
    switch (action.type) {
        case 'SET_USER':
            return action.payload;

        case 'RESET_USER':
            return action.payload;

        default:
            return state;
    }
}

export default UserReducer;
