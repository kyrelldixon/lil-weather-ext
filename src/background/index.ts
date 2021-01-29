import { sendForecast, getDailyForecast, readyStream } from "../lib/weather";

const austinCoordinates = { latitude: 30.2672, longitude: -97.7431 };

readyStream.subscribe(async () => {
  const forecast = await getDailyForecast(austinCoordinates);
  sendForecast(forecast);
});

export {};
