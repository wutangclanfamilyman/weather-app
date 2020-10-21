import React from 'react'
import { CurrentDate, Modal, OpenModalBtn } from '../../components'
import { MainInfo, MoreInfo } from '../../modules'
import './Main.scss'

const MainPage = () => {
    return (
        <div className="page">
            <MainInfo />
            <CurrentDate />
            <MoreInfo />
            <Modal />
            <OpenModalBtn />
        </div>
    )
}

export default MainPage