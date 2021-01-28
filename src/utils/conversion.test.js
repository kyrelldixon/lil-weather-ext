import {
  kelvinToCelsius,
  kelvinToFahrenheit,
  celsiusToFahrenheit,
} from "./conversion";

test("converting kelvin to celsius", () => {
  expect(kelvinToCelsius(273.15)).toEqual(0);
  expect(kelvinToCelsius(320.15)).toEqual(47);
});

test("converting celsius to fahrenheit", () => {
  expect(celsiusToFahrenheit(0)).toEqual(32);
  expect(celsiusToFahrenheit(100)).toEqual(212);
});

test("converting kelvin to fahrenheit", () => {
  expect(Math.round(kelvinToFahrenheit(300))).toEqual(80);
  expect(Math.round(kelvinToFahrenheit(320))).toEqual(116);
});
