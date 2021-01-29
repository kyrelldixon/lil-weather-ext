import { getMessage } from "@extend-chrome/messages";
import type { DailyForecast, DailyForecastResponse } from "../types";

const BASE_WEATHER_URL = "https://api.openweathermap.org/data/2.5/onecall"
const APP_ID = globalThis.WEATHER_API_KEY

async function fetchJSON(url: string) {
  return fetch(url).then(res => {
    if (res.ok) {
      const response: Promise<DailyForecastResponse> = res.json()
      return response;
    }
    throw new Error(res.statusText)
  })
}

interface Coordinates {
  latitude: number;
  longitude: number;
}

export async function getDailyForecast(coords: Coordinates) {
  const params = `lat=${coords.latitude}&lon=${coords.longitude}&exclude=hourly,minutely&appid=${APP_ID}`
  const URL = `${BASE_WEATHER_URL}?${params}`

  const forecastResponse = await fetchJSON(URL)
  const mappedForecast: DailyForecast[] = forecastResponse.daily.map(daily => ({
    temp: daily.temp.day,
    description: daily.weather[0].description,
    datetime: new Date(daily.dt * 1000)
  }))
  return mappedForecast
}

export const [sendForecast, forecastStream] = getMessage<DailyForecast[]>("FORECAST");
export const [sendReady, readyStream, waitForReady] = getMessage<void>('READY')
