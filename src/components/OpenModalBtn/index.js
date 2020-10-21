import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {openModal} from '../../redux/actions'
import SettingsIcon from '../../assets/settings.svg'
import './OpenModalBtn.scss'

const OpenModalBtn = (props) => {

    const {openModal} = props

    return (
        <button className="open-modal-btn" onClick={() => openModal()}>
            <img src={SettingsIcon} />
        </button>
    )
}

const mapDispatchToProps = {
    openModal
}

OpenModalBtn.propTypes = {
    openModal: PropTypes.func
}

export default connect(null, mapDispatchToProps)(OpenModalBtn)