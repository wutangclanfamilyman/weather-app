const initialState = {
    setCity: 'Kiev',
    loading: false,
    error: false,
    weather: {},
    init: false
}

const weatherReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'WEATHER:SET_CITY':
            return {
                ...state,
                setCity: action.payload
            };
        case 'WEATHER:REQUEST':
            return {
                ...state,
                loading: true
            };
        case 'WEATHER:SET_ITEMS':
            return {
                ...state,
                loading: false,
                weather: action.payload,
                init: true
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