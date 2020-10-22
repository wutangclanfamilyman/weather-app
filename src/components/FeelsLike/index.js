import React from 'react'
import PropTypes from 'prop-types'
import './FeelsLike.scss'

const FeelsLike = (props) => {

    const {feels} = props
 
    return (
        <div className="feels-like">
            Feels Like: 
            <div className="feels-like__temp">{Math.round(feels)}</div>
            <div className="feels-like__degree"></div>
            <div className="feels-like__celsium">C</div>
        </div>
    )
}

FeelsLike.propTypes = {
    feels: PropTypes.number
}

export default FeelsLike