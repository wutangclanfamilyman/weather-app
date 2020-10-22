import React from 'react'
import PropTypes from 'prop-types'

const Himidity = (props) => {

    const {himidity} = props

    return (
        <div className="more-info__item">
            <p className="more-info__item-label">Himidity</p>
            <p className="more-info__item-value">{himidity}%</p>
        </div>
    )
}

Himidity.propTypes = {
    himidity: PropTypes.number
}

export default Himidity