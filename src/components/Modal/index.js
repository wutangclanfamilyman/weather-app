import React from 'react'
import {connect} from 'react-redux'
import {openModal, closeModal} from '../../redux/actions'
import PropTypes from 'prop-types'

import EditIcon from '../../assets/edit.svg'
import PlaceIcon from '../../assets/place.svg'
import './Modal.scss'

const Modal = (props) => {

    const {showModal, closeModal} = props

    return showModal ? (
        <div className="modal">
            <div className="modal__header">
                <button className="modal__close" onClick={() => closeModal()}>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <div className="modal__body">
                <div className="modal__field">
                    <input className="modal__input" type="text" placeholder="Enter city"  />
                    <button className="modal__submit">
                        <img src={EditIcon} />
                    </button>
                </div>
                <div className="modal__current-position">
                    <button className="modal__current-position-btn">
                        <img src={PlaceIcon} />
                        Current position
                    </button>
                </div>
            </div>
        </div>
    ) : ''
}

const mapStateToProps = ({showModal}) => {
    return {
        showModal
    }
}

const mapDispatchToProps = {
    closeModal
}

Modal.propTypes = {
    showModal: PropTypes.bool,
    closeModal: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)