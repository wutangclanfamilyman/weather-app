import React from 'react'
import PropTypes from 'prop-types'
import './CurrentTemp.scss'

const CurrentTemp = (props) => {

    const {temp, icon} = props

    const iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`

    return (
        <div className="current-temp">
            <div className="current-temp__icon">
                <img src={iconURL} alt={temp} />
            </div>
            <div className="current-temp__values">
                <span className="current-temp__count">{Math.round(temp)}</span> 
                <span className="current-temp__degree"></span>
                <span className="current-temp__celsius">C</span>
            </div>
        </div> 
    )
}

CurrentTemp.propTypes = {
    temp: PropTypes.number,
    icon: PropTypes.string
}

export default CurrentTemp