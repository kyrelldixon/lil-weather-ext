import { sendForecast, getForecast, readyStream } from "../lib/weather";
import type { Forecast } from "../types";

const forecast = getForecast();

const minimalForecast: Forecast = {
  daily: forecast.daily.map(daily => ({
    temp: {
      day: daily.temp.day
    },
    weather: {
      description: daily.weather[0].description
    }
  }))
}

readyStream.subscribe(() => {
  sendForecast(minimalForecast);
});

export {};
