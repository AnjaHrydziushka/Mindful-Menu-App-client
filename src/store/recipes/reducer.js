const initialState = {};

export default function recipesReducer(state = initialState, {type, payload}) {
    switch (type) {
        case 'fetch_recipes':
            return payload;
        default:
            return state;
    }
}