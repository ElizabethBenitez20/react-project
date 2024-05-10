import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFarhrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <span className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C |{" "}
          <button className="button-unit" onClick={showFarhrenheit}>
            °F
          </button>
        </span>
      </span>
    );
  } else {
    return (
      <span className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheit())}</span>
        <span className="unit">
          <button className="button-unit" onClick={showCelsius}>
            °C
          </button>{" "}
          | °F
        </span>
      </span>
    );
  }
}
