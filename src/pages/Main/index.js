import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { CurrentDate, Modal, OpenModalBtn } from '../../components'
import { MainInfo, MoreInfo } from '../../modules'

import {weatherRequest, fetchWeatherDataCurrentPosition} from '../../redux/actions'

import './Main.scss'

const MainPage = (props) => {
    
    const {setCity, weatherData, fetchWeatherDataCurrentPosition} = props

    useEffect(() => {
        fetchWeatherDataCurrentPosition(setCity)
    }, [])

    return weatherData ? (
        <div className="page">
            <MainInfo weather={weatherData.weather} temp={weatherData.main} city={weatherData.name} country={weatherData.sys} />
            <CurrentDate />
            <MoreInfo wind={weatherData.wind} airAndHimidity={weatherData.main} />
            <Modal />
            <OpenModalBtn />
        </div>
    ) : <div className="page"><div className="lds-circle"><div></div></div></div>
}

MainPage.propTypes = {
    setCity: PropTypes.string,
    weatherData: PropTypes.object,
    fetchWeatherDataCurrentPosition: PropTypes.func
}

const MapStateToProps = (state) => {
    return {
        setCity: state.weather.setCity,
        weatherData: state.weather.weather
    }
}

const MapDispatchToProps = {
    fetchWeatherDataCurrentPosition
}

export default connect(MapStateToProps, MapDispatchToProps)(MainPage)