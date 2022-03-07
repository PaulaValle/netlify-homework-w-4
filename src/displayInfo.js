import React from "react";
import axios from "axios";
import "./styles.css";

export default function searchEngine() {
  async function weather(event) {
    function displayInformation(response) {
      return `
      <div>
        <ul>
          At ${city} is:
          <li>Temperature: ${Math.round(response.data.main.temp)}ºC</li>
          <li>Description: ${response.data.weather[0].description}</li>
          <li>Humidity: ${response.data.main.humidity}%</li>
          <li>Wind: ${response.data.wind.speed} km/h</li>
          <li class="icon"><img
          src="http://openweathermap.org/img/wn/${
            response.data.weather[0].icon
          }@2x.png"</li>
        </ul>
      </div>
      `;
    }
    let city = event.target.value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2f1b841a3b6dc609cb8924e01b3900c6&units=metric`;
    let response = null;

    await axios.get(url).then((info) => {
      response = info;
    });
    return displayInformation(response);
  }

  async function typedSubmit(event) {
    let city = event.target.value;
    event.preventDefault();
    let result = document.querySelector(".result");
    result.innerHTML = await weather(city);
  }

  return (
    <div>
      <form onSubmit={typedSubmit}>
        <input type="search" onChange={weather} />
        <input type="submit" value="Search" />
        <div className="errorEmptyCity"></div>
      </form>
      <h3 className="result"> </h3>
    </div>
  );
}
