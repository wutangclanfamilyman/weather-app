const openModal = () => {
    return {
        type: 'MODAL:OPEN'
    }
}

const closeModal = () => {
    return {
        type: 'MODAL:CLOSE'
    }
}

const weatherRequest = () => {
    return {
        type: 'WEATHER:REQUEST'
    }
}

const weatherError = () => {
    return {
        type: 'WEATHER:ERROR'
    }
}

const weatherSetItems = (data) => {
    return {
        type: 'WEATHER:SET_ITEMS',
        payload: data
    }
}


export {
    openModal,
    closeModal,
    weatherError,
    weatherSetItems,
    weatherRequest
}