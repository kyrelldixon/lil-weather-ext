export interface DailyForecast {
  temp: {
    day: number;
  };
  weather: {
    description: string;
  };
}

export interface Forecast {
  daily: DailyForecast[];
}
