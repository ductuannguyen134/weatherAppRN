const loadReducer = (state = false, action) => {
    switch(action.type) {
        case 'LOAD':
            return !state;
        default:
            return state;
    }
}

export default loadReducer;