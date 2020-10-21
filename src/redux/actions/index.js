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

export {
    openModal,
    closeModal
}