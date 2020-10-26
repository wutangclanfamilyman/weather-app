import { func } from "prop-types"
import WeatherApi from "../../api"
const weatherApi = new WeatherApi()

const openModal = () => {
    return {
        type: 'MODAL:OPEN'
    }
}

const closeModal = () => {
    return {
        type: 'MODAL:CLOSE'
    }
}

const weatherRequest = () => {
    return {
        type: 'WEATHER:REQUEST'
    }
}

const weatherError = () => {
    return {
        type: 'WEATHER:ERROR'
    }
}

const weatherSetItems = (data) => {
    return {
        type: 'WEATHER:SET_ITEMS',
        payload: data
    }
}

const weatherSetCity = (city) => {
    return {
        type: 'WEATHER:SET_CITY',
        payload: city
    }
}

const fetchWeatherDataByCity = (city) => (dispatch) => {
    weatherApi.getWeatherDataByCity(city)
        .then((data) => {
            dispatch(weatherSetItems(data))
            dispatch(weatherSetCity(data.name))
        })
        .catch(err => console.log(err))
}

const fetchWeatherDataByCoords = (lat, lng) => (dispatch) => {
        weatherApi.getWeatherDataByCoords(lat,lng)
        .then((data) => {
            dispatch(weatherSetItems(data))
            dispatch(weatherSetCity(data.name))
        })
        .catch(err => console.error(err))
}

const fetchWeatherDataCurrentPosition = (city) => (dispatch) => {
    if(navigator.geolocation) {
        navigator.geolocation.watchPosition((position) => {
            dispatch(fetchWeatherDataByCoords(position.coords.latitude, position.coords.longitude))
        }, (error) => {
            dispatch(fetchWeatherDataByCity(city))
        })
    }
}

export {
    openModal,
    closeModal,
    weatherError,
    weatherSetItems,
    weatherRequest,
    weatherSetCity,
    fetchWeatherDataByCoords,
    fetchWeatherDataByCity,
    fetchWeatherDataCurrentPosition
}