import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {weatherSetCity, weatherSetItems,fetchWeatherDataByCity, closeModal, fetchWeatherDataCurrentPosition} from '../../redux/actions'
import EditIcon from '../../assets/edit.svg'
import PlaceIcon from '../../assets/place.svg'

import './Modal.scss'

const Modal = (props) => {

    const [city, setCityInput] = useState('')

    const {show, closeModal, weather, init, fetchWeatherDataByCity, fetchWeatherDataCurrentPosition} = props

    return show ? (
        <div className="modal">
            <div className="modal__header">
                <button className="modal__close" onClick={() => closeModal()}>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <div className="modal__body">
                <div className="modal__field">
                    <input className="modal__input" type="text" placeholder="Enter city" onChange={(e) => {setCityInput(e.target.value)}} value={city} />
                    <button className="modal__submit" onClick={() => {fetchWeatherDataByCity(city)}} >
                        <img src={EditIcon} />
                    </button>
                </div>
                <div className="modal__current-position">
                    <button className="modal__current-position-btn" onClick={() => {
                        console.log(init);
                        if(init) {
                            alert('Please, enable geolocation!')
                            return
                        }
                        fetchWeatherDataCurrentPosition(city)
                     }}>
                        <img src={PlaceIcon} />
                        Current position
                    </button>
                </div>
            </div>
        </div>
    ) : ''
}

const mapStateToProps = (state) => {
    return {
        show: state.modal.showModal,
        init: state.weather.init,
        geolocation: state.weather.geolocation,
        setCity: state.weather.setCity,
        weather: state.weather.weather
    }
}

const mapDispatchToProps = {
    closeModal,
    weatherSetCity,
    weatherSetItems,
    fetchWeatherDataByCity,
    fetchWeatherDataCurrentPosition
}

Modal.propTypes = {
    show: PropTypes.bool,
    closeModal: PropTypes.func,
    init: PropTypes.bool,
    weather: PropTypes.object,
    geolocation: PropTypes.bool,
    weatherSetCity: PropTypes.func,
    weatherSetItems: PropTypes.func,
    fetchWeatherDataByCity: PropTypes.func,
    fetchWeatherDataCurrentPosition: PropTypes.func,
    setCity: PropTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)