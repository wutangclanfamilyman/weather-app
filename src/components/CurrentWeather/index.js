import React from 'react'
import PropTypes from 'prop-types'

import './CurrentWeather.scss'

const CurrentWeather = (props) => {

    const {weather} = props

    return (
        <div className="current-weather">{weather}</div>
    )
}

CurrentWeather.propTypes = {
    weather: PropTypes.string
}

export default CurrentWeather