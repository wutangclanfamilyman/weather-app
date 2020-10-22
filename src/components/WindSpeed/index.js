import React from 'react'
import PropTypes from 'prop-types'

const WindSpeed = (props) => {

    const {windSpeed} = props

    return (
        <div className="more-info__item">
            <p className="more-info__item-label">Wind Speed</p>
            <p className="more-info__item-value">{windSpeed} km/s</p>
        </div>
    )
}

WindSpeed.propTypes = {
    windSpeed: PropTypes.number
}

export default WindSpeed