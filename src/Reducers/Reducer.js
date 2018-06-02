const initialState = {
    rangeReport: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case 'INCREMENT':
        return { ...state, action };
    case 'DECREMENT':
        return state - 1;
    default:
        return state;
    }
};

export default reducer;
