import React from 'react'
import PropTypes from 'prop-types'

const AirPressure = (props) => {

    const {airPressure} = props

    return (
        <div className="more-info__item">
            <p className="more-info__item-label">Air Pressure</p>
            <p className="more-info__item-value">{airPressure} PS</p>
        </div>
    )
}

AirPressure.propTypes = {
    airPressure: PropTypes.number
}

export default AirPressure