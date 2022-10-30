import React from "react";
import "./TodayWeather.css";

const TodayWeather = (props) => {
    const { city, country, weekday, time, weatherDescription, weatherIcon, temp } = props
    return (
      <div className="container weatherData rounded">
        <div className="row todayCity justify-content-left">
          {city}, {country}
        </div>
        <div className="row todayDay">
          {weekday} {time}
        </div>
        <div className="row todayDesc justify-content-left">
          {weatherDescription}
        </div>
        <div className="row todayTemp justify-content-left">
          <img src={weatherIcon} alt="" />
          <div className="display-celsius">{temp}<span className="celsius">&#x2103;</span><span className="current">current</span></div>
        </div>
        <div className="today">Today</div>
      </div>
    )
}

export default TodayWeather;