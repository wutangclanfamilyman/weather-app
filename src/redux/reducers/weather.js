const initialState = {
    setCity: 'Kiev',
    loading: false,
    error: false,
    weather: {}
}

const weatherReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'WEATHER:REQUEST':
            return {
                ...state,
                loading: true
            };
        case 'WEATHER:SET_ITEMS':
            return {
                ...state,
                loading: false,
                weather: action.payload
            };
        case 'WEATHER:ERROR':
            return {
                ...state,
                loading: false,
                error: false
            };
        default:
            return {
                ...state
            }
    }
}

export default weatherReducer