import React from "react";
import "./WeeklyWeather.css";

const WeeklyWeather = (props) => {
    const { weeklyData, weekday } = props
    return (
      <div className="row rowWeeklyData">
        <div className="weekly-container">
          {weeklyData.map(forecast => {
            return (
              <div key={forecast.weekday} className={`weeklyData ${forecast.weekday === weekday ? 'highline' : ''}`}>
                <div>{forecast.weekday}</div>
                <img src={forecast.weather_icon} alt="" />
                <div>
                  <p>Temperature:</p>
                  Max: {forecast.max}<span className="celsius">&#x2103;</span>  | Min: {forecast.min}<span className="celsius">&#x2103;</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
}

export default WeeklyWeather;