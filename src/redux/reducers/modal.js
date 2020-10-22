const initialState = {
    showModal: false
}

const modal = (state = initialState, action) => {
    switch(action.type) {
        case 'MODAL:OPEN':
            return {
                ...state,
                showModal: true
            };
        case 'MODAL:CLOSE':
            return {
                ...state,
                showModal: false
            };
        default:
            return {
                ...state
            }
    }
}

export default modal