import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <div className="clearfix">
        <WeatherIcon code={props.data.icon} />
        <WeatherTemperature celsius={props.data.temperature} />
      </div>
      <div className="row mt-3">
        <div className="col-6">
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Humidity:{" "}
              <span className="data-color">{props.data.humidity}%</span>
            </li>
            <li>
              Wind: <span className="data-color">{props.data.wind}km/h</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
