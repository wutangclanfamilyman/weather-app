import React, {useState, useEffect} from 'react'
import './CurrentDate.scss'

const CurrentDate = () => {

    const [currentTime, setCurrentTime] = useState({
        day: '',
        hours: '',
        minutes: ''
    })

    useEffect(() => {
        calcDateTime()
    })

    const formatTime = (count) => {
        return count > 9 ? count : `0${count}`
    }

    function calcDateTime() { setInterval(() => {
        const now = new Date();

        let day = now.toLocaleDateString('ru-RU', {weekday: 'long'});
        let hours = formatTime(now.getHours());
        let minutes = formatTime(now.getMinutes());

        setCurrentTime({
            day,
            hours,
            minutes
        })

        }, 1000)
    }

    return (
        <div className="current-date">
            {currentTime.day}, <span>{currentTime.hours}:{currentTime.minutes}</span>
        </div>
    )
}

export default CurrentDate