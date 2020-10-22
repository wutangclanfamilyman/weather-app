import React from 'react'
import PropTypes, { object } from 'prop-types'
import { CurrentCity, CurrentWeather, CurrentTemp, FeelsLike } from '../../components'

import './MainInfo.scss'

const MainInfo = (props) => {

    const {weather, temp, country, city} = props

    return weather ? (
        <div className="main-info">
            <CurrentCity country={country.country} city={city} /> 
            <CurrentWeather weather={weather[0].description}/>
            <CurrentTemp temp={temp.temp} icon={weather[0].icon} />
            <FeelsLike feels={temp.feels_like} />
        </div>
    ) : ''
}

MainInfo.propTypes = {
    weather: PropTypes.array,
    city: PropTypes.string,
    temp: PropTypes.object,
    country: PropTypes.object
}

export default MainInfo