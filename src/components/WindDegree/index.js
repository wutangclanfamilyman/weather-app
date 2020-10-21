import React from 'react'
import WindArrow from '../../assets/wind.svg'

const WindDegree = () => {
    return (
        <div className="more-info__item">
            <p className="more-info__item-label">Wind Degrees</p>
            <img src={WindArrow} style={{transform: `rotate(20deg)`}} />
        </div>
    )
}

export default WindDegree