import React from 'react'
import IconWeather from '../../assets/icon.svg'
import './CurrentTemp.scss'

const CurrentTemp = () => {
    return (
        <div className="current-temp">
            <div className="current-temp__icon">
                <img src={IconWeather} />
            </div>
            <div className="current-temp__values">
                <span className="current-temp__count">25</span> 
                <span className="current-temp__degree"></span>
                <span className="current-temp__celsius">C</span>
            </div>
        </div> 
    )
}

export default CurrentTemp