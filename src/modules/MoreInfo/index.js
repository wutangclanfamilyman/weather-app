import React from 'react'
import {WindDegree, AirPressure, Himidity, WindSpeed} from '../../components'

import './MoreInfo.scss'

const MoreInfo = () => {
    return (
        <div className="more-info">
            <WindDegree />
            <WindSpeed />
            <AirPressure />
            <Himidity />
        </div>
    )
}

export default MoreInfo