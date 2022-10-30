import React, {useState} from "react";
import {
    getTodayData,
    get3HoursData,
    getWeeklyData
} from "../../utils/apiRequest";
import WeeklyWeather from "../WeeklyWeather/WeeklyWeather";
import TodayWeather from "../TodayWeather/TodayWeather"
import "./Weather.css";

const Weather = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [weatherData, setWeatherData] = useState({
        firstTime: true,
        city: "",
        weekday: "",
        temp: "",
        weatherDescription: "",
        weatherIcon: "",
        country: "",
        timezone: "",
        time: ""
    })
    const [weeklyWeatherData, setWeeklyWeatherData] = useState([])

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const updateTodayWeather = (data) => {
        setWeatherData({...weatherData,
            firstTime: false,
            temp: data.temp,
            weatherDescription: data.weatherDescription,
            weatherIcon: data.weatherIcon,
            country: data.country,
            timezone: data.timezone,
            dateTime: data.dateTime,
            time: data.time,
            weekday: data.weekday,
            city: data.city
        })
    }

    const updateWeeklyWeather = (data) => {
        const weeklyData = getWeeklyData(data)
        setWeeklyWeatherData(weeklyData)
    }

    const warningBanner = () => {
        if (weatherData.firstTime) {
          return null;
        }
    
        return (
          <div className="warningBanner">
            We couldn’t find any results. Try checking your spelling.
          </div>
        );
      }

    const weatherDataExisted = () => {
        if (typeof weatherData.city === "undefined" || weatherData.city === "") {
            return false
        } else {
            return true
        }
    }

    const search = () => {
        getTodayData(searchTerm).then(data => updateTodayWeather(data));
        get3HoursData(searchTerm).then(data => updateWeeklyWeather(data));
    }

    return (
        <div className="container">
            <div className="searchBox">
                <input
                    type="text"
                    className="form-control"
                    placeholder="City..."
                    aria-label="City..."
                    aria-describedby="button-addon2"
                    onChange={(e) => handleChange(e)}
                />     
                <div className="input-group-append">
                    <button
                        className="btn btn-outline-primary"
                        type="button"
                        onClick={() => search()}
                        >
                        Search
                    </button>
                </div>
            </div>
            <div>
                
            </div>
            {weatherDataExisted() ? (
                <>
                    <TodayWeather
                        city={weatherData.city}
                        country={weatherData.country}
                        temp={weatherData.temp}
                        time={weatherData.time}
                        weekday={weatherData.weekday}
                        weatherDescription={weatherData.weatherDescription}
                        weatherIcon={weatherData.weatherIcon}
                    />
                    <WeeklyWeather weeklyData={weeklyWeatherData} />
                </>
            ):
                warningBanner()
            }
            
        </div>
    )
}

export default Weather;