import { getMessage } from "@extend-chrome/messages";
import type { DailyForecast } from "../types";
import mockForecast from "../mock-forecast.json";

export function getDailyForecast() {
  const mappedForecast: DailyForecast[] = mockForecast.daily.map(daily => ({
    temp: daily.temp.day,
    description: daily.weather[0].description,
    datetime: new Date(daily.dt * 1000)
  }))
  return mappedForecast
}

export const [sendForecast, forecastStream] = getMessage<DailyForecast[]>("FORECAST");
export const [sendReady, readyStream, waitForReady] = getMessage<void>('READY')
