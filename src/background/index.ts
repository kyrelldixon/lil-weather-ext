import { sendForecast, getDailyForecast, readyStream } from "../lib/weather";

readyStream.subscribe(() => {
  const forecast = getDailyForecast();
  sendForecast(forecast);
});

export {};
