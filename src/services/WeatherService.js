const key = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
const keyQuery = `appid=${key}`;
const server = 'https://api.openweathermap.org/data/2.5';
// const url: string = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"
if (key === undefined){
    throw new Error("No key was provided")
}

export async function searchLocation(term) {
    const result = await fetch(`${server}/weather?q=${term}&${keyQuery}`);
    if (result.status === 404) {return undefined};
    if (result.status !== 200) {
        throw new Error(`Failed to read location data`);
    }
    return await result.json();
}

export async function readForeCast(locationId) {
    const forecast = await fetch(`${server}/forecast?id=${locationId}&${keyQuery}&units=imperial`);
    if (forecast.status !== 200) {
        throw new Error(`Failed to read location data`);
    }
    return (await forecast.json()).list;
}

export async function readWeather(locationId) {
    const current = await fetch(`${server}/weather?id=${locationId}&${keyQuery}&units=imperial`);
    if (current.status !== 200) {
        throw new Error(`Failed to read location data`);
    }
    return (await current.json());
}

export function getIconUrl(code) {
    return `http://openweathermap.org/img/wn/${code}.png`
}