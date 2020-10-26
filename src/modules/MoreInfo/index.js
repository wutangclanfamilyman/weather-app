import React from 'react'
import {WindDegree, AirPressure, Himidity, WindSpeed} from '../../components'
import PropTypes from 'prop-types'
import './MoreInfo.scss'

const MoreInfo = (props) => {

    const {wind, airAndHimidity} = props

    return (wind || airAndHimidity) ? (
        <div className="more-info">
            <WindDegree windDegree={wind.deg} />
            <WindSpeed windSpeed={wind.speed} />
            <AirPressure airPressure={airAndHimidity.pressure} />
            <Himidity himidity={airAndHimidity.humidity} />
        </div>
    ) : ''
}

MoreInfo.propTypes = {
    wind: PropTypes.object,
    airAndHimidity: PropTypes.object
}

export default MoreInfo