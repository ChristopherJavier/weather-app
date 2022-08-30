const DailyWeather = ({ show, cityInfo, dailyWeather, units, lang }) => {

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
        return date.toLocaleDateString(`${lang}-US`)
    }

    if (!show) {
        return null
    }

    if (!cityInfo) {
        return (
            <div className="flex flex-col justify-center items-center mt-40">
                <img src="https://img.icons8.com/ios-glyphs/50/000000/search--v1.png" alt="search" />
                <h1 className="text-2xl">No Weather Info</h1>
                <h2 className="text-1xl">Please search your city</h2>
            </div>
        )
    }

    return (
        <div>
            <div className="flex flex-col items-center mt-5">
                <h1 className="text-lg">{cityInfo[0].name}, {cityInfo[0].country}</h1>
            </div>
            <div className="container flex flex-col w-full">
                {dailyWeather &&
                    dailyWeather.map(info => (
                        <div key={info.dt} className="flex flex-wrap justify-center my-2">
                            <div className="grid grid-cols-3 grid-rows-3 gap-0 h-auto w-4/5 p-2 bg-blue-100/75 rounded-md">
                                <div className="flex flex-col justify-center items-center col-span-2 row-start-1 row-end-3">
                                    <span className="text-2xl font-semibold">
                                        {info.temp.max} {unitsObject.temperature}
                                    </span>
                                    <span className="text-xl">
                                        {info.temp.min} {unitsObject.temperature}
                                    </span>
                                </div>
                                <div className="flex flex-col justify-center items-center col-span-2 row-start-1 row-end-3">
                                    <span className="text-sm font-medium">{displayTime(info.dt)}</span>
                                    <img src={`http://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`} alt={info.weather[0].main}></img>
                                </div>
                                <div className="flex flex-row justify-around items-center row-span-3 col-span-3">
                                    <div className="flex flex-row">
                                        <img src="https://img.icons8.com/ios-glyphs/30/000000/humidity.png" alt="humidity" />
                                        <span>{info.humidity}%</span>
                                    </div>
                                    <div className="flex flex-row">
                                        <img src="https://img.icons8.com/ios-glyphs/30/000000/wind--v1.png" alt="wind speed" />
                                        <span>{info.wind_speed} {unitsObject.speed}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default DailyWeather