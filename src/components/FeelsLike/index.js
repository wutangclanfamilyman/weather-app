import React from 'react'

import './FeelsLike.scss'

const FeelsLike = () => {
    return (
        <div className="feels-like">
            Feels Like: 
            <div className="feels-like__temp">28</div>
            <div className="feels-like__degree"></div>
            <div className="feels-like__celsium">C</div>
        </div>
    )
}

export default FeelsLike