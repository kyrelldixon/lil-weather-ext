import { getCurrentPosition } from "../utils/position";
import { sendForecast, getDailyForecast, readyStream } from "../lib/weather";

readyStream.subscribe(async () => {
  try {
    const coords = await getCurrentPosition();
    const forecast = await getDailyForecast(coords);
    sendForecast(forecast);
  } catch (error) {
    console.error("TODO: handle errors");
  }
});

export {};
