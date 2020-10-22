import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import PropTypes, { func } from 'prop-types'
import WeatherApi from '../../api'
import { CurrentDate, Modal, OpenModalBtn } from '../../components'
import { MainInfo, MoreInfo } from '../../modules'

import {weatherRequest, weatherSetItems, weatherError} from '../../redux/actions'

import './Main.scss'

const MainPage = (props) => {
    
    const weatherApi = new WeatherApi() 

    const {city, weatherData, weatherSetItems} = props

    useEffect(() => {
        weatherApi.getWeatherData(city)
            .then(data => weatherSetItems(data))
            .catch(err => console.error(err))
    }, [])
    
    return weatherData ? (
        <div className="page">
            <MainInfo weather={weatherData.weather} temp={weatherData.main} city={weatherData.name} country={weatherData.sys} />
            <CurrentDate />
            <MoreInfo wind={weatherData.wind} airAndHimidity={weatherData.main} />
            <Modal />
            <OpenModalBtn />
        </div>
    ) : <div className="lds-circle"><div></div></div>
}

MainPage.propTypes = {
    city: PropTypes.string,
    weatherData: PropTypes.object,
    weatherSetItems: PropTypes.func
}

const MapStateToProps = (state) => {
    return {
        city: state.weather.setCity,
        weatherData: state.weather.weather
    }
}

const MapDispatchToProps = {
    weatherSetItems
}

export default connect(MapStateToProps, MapDispatchToProps)(MainPage)