import { SunIcon, MoonIcon } from "@heroicons/react/solid"

const DisplayWeather = ({ cityInfo, weatherInfo, show, units, lang }) => {

    let unitsObject = {
        temperature: "",
        speed: ""
    }

    const unitsToDisplay = (units) => {
        units === "metric" ? (
            unitsObject = {
                temperature: "°C",
                speed: "m/s"
            }
        ) : units === "imperial" ? (
            unitsObject = {
                temperature: "°F",
                speed: "mph"
            }
        ) : (
            unitsObject = {
                temperature: "°K",
                speed: "m/s"
            }
        )
    }

    unitsToDisplay(units)

    const displayTime = (time) => {
        const date = new Date(time * 1000)
        return date.toLocaleTimeString(`${lang}-US`)
    }

    if (!show) {
        return null
    }

    if (!weatherInfo) {
        return (
            <div className="flex flex-col justify-center items-center mt-40">
                <img src="https://img.icons8.com/ios-glyphs/50/000000/search--v1.png" alt="search"/>
                <h1 className="text-2xl">No Weather Info</h1>
                <h2 className="text-1xl">Please search your city</h2>
            </div>
        )
    }

    return (
        <div className="flex flex-col justify-center items-center my-10">
            <div className="flex flex-col items-center">
                <h2 className="text-lg">{cityInfo[0].name}, {cityInfo[0].country}</h2>
                <img src={`http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`} alt={`${weatherInfo.weather[0].description}`} />
                <h3 className="text-lg">{weatherInfo.weather[0].main}</h3>
            </div>
            <div>
                <h2 className="text-2xl">{Math.round(weatherInfo.temp)}{unitsObject.temperature}</h2>
            </div>
            <div className="flex flex-row justify-center items-center my-10">
                <div className="flex flex-row mx-1 items-center">
                    <img src="https://img.icons8.com/ios-glyphs/30/000000/humidity.png" alt="humidity" />
                    <span className="text-sm">{weatherInfo.humidity}%</span>
                </div>
                <div className="flex flex-row mx-1 items-center">
                    <img src="https://img.icons8.com/ios-glyphs/30/000000/atmospheric-pressure--v1.png" alt="atm pressure" />
                    <span className="text-sm">{weatherInfo.pressure}hPa</span>
                </div>
                <div className="flex flex-row mx-1 items-center">
                    <img src="https://img.icons8.com/ios-glyphs/30/000000/wind--v1.png" alt="wind speed" />
                    <span className="text-sm">{weatherInfo.wind_speed}{unitsObject.speed}</span>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-row justify-center items-center my-1">
                    <SunIcon className="h-[30px] w-[30px]" />
                    {displayTime(weatherInfo.sunrise)}
                </div>
                <div className="flex flex-row justify-center items-center my-1">
                    <MoonIcon className="h-[30px] w-[30px]" />
                    {displayTime(weatherInfo.sunset)}
                </div>
            </div>
        </div>
    )
}

export default DisplayWeather