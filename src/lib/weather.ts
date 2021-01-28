import { getMessage } from "@extend-chrome/messages";
import type { Forecast } from "../types";
import mockForecast from "../mock-forecast.json";

export function getForecast() {
  return mockForecast;
}

export const [sendForecast, forecastStream] = getMessage<Forecast>("FORECAST");
export const [sendReady, readyStream, waitForReady] = getMessage<void>('READY')
