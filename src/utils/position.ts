import type { Coordinates } from "../types";

export function getCurrentPosition(): Promise<Coordinates> {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject("Geolocation is disabled")
    }
    const onSuccess: PositionCallback = (position) => {
      const coords: Coordinates = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
      resolve(coords);
    };
    const onError: PositionErrorCallback = (err) => reject(err)
    const options: PositionOptions = { timeout: 5000 }
    navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
  });
}