import axios from 'axios';

export default class weatherApi {

    async getWeatherDataByCity(city) {
        debugger
        const result = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}&units=metric`)
            .then(res => res.data)
            .catch(err => console.error(err))

        return await result
    }

    async getWeatherDataByCoords(lat, lng) {
        const result = axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}&units=metric`)
            .then(res => res.data)
            .catch(err => console.error(err))

        return await result
    }

}