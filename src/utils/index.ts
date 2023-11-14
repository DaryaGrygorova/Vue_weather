// import { WeatherInfo } from "@/types/types";
// import { BASE_URL, API_KEY } from "../../config";

export function capitalizeFirstChar(str: string): string {
    if (!str) return ''

    return str.charAt(0).toUpperCase() + str.slice(1)
}

const PRESSURE_UNITS = 0.750062

export function getPressureMm(hpa: number): number {
    return Math.round(hpa * PRESSURE_UNITS)
} 

export function getTime(seconds: number): string {
    return new Date((seconds) * 1000).toLocaleTimeString('ru-Ru', {timeZone: 'Atlantic/Reykjavik'})
} 

// export async function getWeatherInfo(city_name: string) {
//     fetch(`${BASE_URL}?q=${city_name}&units=metric&appid=${API_KEY}`)
//       .then((res) => res.json())
//       .then((data) => (// save to store));
//   }