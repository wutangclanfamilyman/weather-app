const initialStore = {
    currentPosition: 'Kiev',
    showModal: false
}

const reducers = (state = initialStore, action) => {
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

export default reducers