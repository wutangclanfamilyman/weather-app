import React from 'react'
import { CurrentCity, CurrentWeather, CurrentTemp, FeelsLike } from '../../components'

import './MainInfo.scss'

const MainInfo = () => {
    return (
        <div className="main-info">
            <CurrentCity /> 
            <CurrentWeather />
            <CurrentTemp />
            <FeelsLike />
        </div>
    )
}

export default MainInfo