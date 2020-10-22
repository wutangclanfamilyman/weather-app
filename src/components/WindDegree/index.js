import React from 'react'
import PropTypes from 'prop-types'
import WindArrow from '../../assets/wind.svg'

const WindDegree = (props) => {

    const {windDegree} = props

    return (
        <div className="more-info__item">
            <p className="more-info__item-label">Wind Degrees</p>
            <img src={WindArrow} style={{transform: `rotate(${windDegree}deg)`}} />
        </div>
    )
}

WindDegree.propTypes = {
    windDegree: PropTypes.number
}

export default WindDegree