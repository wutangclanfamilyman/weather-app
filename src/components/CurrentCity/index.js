import React from 'react'
import PropTypes from 'prop-types'
import './CurrentCity.scss'

const CurrentCity = (props) => {

    const {city, country} = props

    return (
        <div className="current-city">
            {city},<span>{country}</span>
        </div>
    )
}

CurrentCity.propTypes = {
    city: PropTypes.string,
    country: PropTypes.string
}

export default CurrentCity