import React, { useState, useEffect } from "react"
import DisplayWeather from "./components/DisplayWeather"
import FilterForm from "./components/FilterForm"
import Configurations from "./components/Configurations"
import Tabs from "./components/Tabs"
import weatherService from "./services/weather"
import DailyWeather from "./components/DailyWeather"

const App = () => {
  const [cityName, setCityName] = useState('')
  const [units, setUnits] = useState('')
  const [lang, setLang] = useState('en')
  const [pages, setPages] = useState('displayWeather')
  const [Weather, setWeather] = useState(null)
  const [dailyWeather, setDailyWeather] = useState(null)
  const [cityInfo, setCityInfo] = useState(null)

  let varStyle

  const getWeatherInfo = async (cityName, units, lang) => {
    const geoCodingInfo = await weatherService.geoCoding(cityName)
    const lat = geoCodingInfo[0].lat
    const lon = geoCodingInfo[0].lon
    const getWeatherInfo = await weatherService.getWeather(lat, lon, units, lang)
    setCityInfo(geoCodingInfo)
    setWeather(getWeatherInfo.current)
    setDailyWeather(getWeatherInfo.daily)
  }

  useEffect(() => {
    if (cityName) {
      getWeatherInfo(cityName, units, lang)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityName, units, lang])  

  pages === 'displayWeather' || pages === 'configuration'
    ? varStyle = "h-screen"
    : dailyWeather ? (
      varStyle = "h-fit pb-[20%] pt-[10%]"
    ) : varStyle = "h-screen"

  return (
    <div className={`flex flex-col w-screen ${varStyle} items-center bg-blue-500/30`}>
      <div className="h-[90%] w-[90%] m-auto justify-around">
        <FilterForm
          show={pages !== "configuration"}
          setCityName={setCityName}
        />
        <DisplayWeather
          show={pages === "displayWeather"}
          cityInfo={cityInfo}
          weatherInfo={Weather}
          units={units}
          lang={lang}
        />
        <Configurations
          show={pages === "configuration"}
          setUnits={setUnits}
          setLang={setLang}
        />
        <DailyWeather
          show={pages === "dailyWeather"}
          cityInfo={cityInfo}
          dailyWeather={dailyWeather}
          units={units}
          lang={lang}
        />
        <Tabs setPages={setPages} />
      </div>
    </div>
  )
}

export default App