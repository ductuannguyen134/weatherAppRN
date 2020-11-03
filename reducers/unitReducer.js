const initialState = {
    unit: 'kevin'
}

const unitReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'TO_CELSIUS':
            return {
                ...state,
                unit: action.payload
            };
        case 'TO_KEVIN':
            return {
                ...state,
                unit: action.payload
            };
        case 'TO_FAHRENHEIT':
            return {
                ...state,
                unit: action.payload
            };
        default:
            return state;
    }
}

export default unitReducer;