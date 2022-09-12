/* eslint-disable import/no-anonymous-default-export */
import axios from "axios"

const API_KEY = process.env.REACT_APP_API_KEY

const geoCoding = async (cityName) => {
    const geocodingLink = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`
    const request = await axios.get(geocodingLink)
    return request.data
}

const getWeather = async (lat, lon, units, lang) => {
    const baseUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&units=${units}&lang=${lang}&appid=${API_KEY}`
    const request = await axios.get(baseUrl)
    return request.data
}

export default {
    geoCoding,
    getWeather
}