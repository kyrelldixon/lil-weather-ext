export function kelvinToCelsius(temp: number) {
  return temp - 273.15;
}

export function celsiusToFahrenheit(temp: number) {
  return temp * (9 / 5) + 32;
}

export function kelvinToFahrenheit(temp: number) {
  return celsiusToFahrenheit(kelvinToCelsius(temp));
}
