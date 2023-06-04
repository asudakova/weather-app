import {DateTime} from "luxon";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const BASE_URL = "http://api.openweathermap.org";

const getWeatherData = async (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({...searchParams, appid: API_KEY});
  const res = await fetch(url);
  const resJSON = await res.json();
  return resJSON;
}

const formatCoordinates = (data) => {
  const {lat, lon} = data[0];

  return {lat, lon};
}

const formatCurrentWeather = (data) => {
  const {
    weather,
    main: {temp, feels_like, temp_min, temp_max, humidity},
    wind: {speed},
    dt,
    sys: {country, sunrise, sunset},
    name,
    timezone
  } = data;

  const timeUTC = timezoneToUTC(timezone);

  const sunrise_time = formatToLocalTime(sunrise, timeUTC,"hh:mm a");
  const sunset_time = formatToLocalTime(sunset, timeUTC, "hh:mm a");
  const date = formatToLocalTime(dt, timeUTC, "cccc, dd LLLL");
  const local_time = formatToLocalTime(dt, timeUTC,"hh:mm a");

  const {main, icon} = weather[0];

  const iconURL = iconCodeToURL(icon);

  return {name, date, local_time, main, iconURL, temp, feels_like, temp_min, temp_max, humidity, speed, country, sunrise_time, sunset_time}
}

const formatForecastWeather = (data) => {
  let {city: {timezone}, list} = data;
  list = list.slice(0,5).map((d) => {
    return {
      forecast_time: formatToLocalTime(d.dt, timezoneToUTC(timezone), "hh a"),
      forecast_temp: d.main.temp,
      forecast_ico: iconCodeToURL(d.weather[0].icon)
    }
  })
  return {list};
}

const getFormattedWeatherData = async (searchParams) => {
  if (searchParams.hasOwnProperty('q')) {
    const formattedCoordinates = await getWeatherData('geo/1.0/direct', searchParams).then(formatCoordinates)

    const  {lat, lon} = formattedCoordinates;

    const formattedCurrentWeather = await getWeatherData('data/2.5/weather',
      {lat, lon, units: searchParams.units}
    ).then(formatCurrentWeather)

    const formattedForecastWeather = await getWeatherData('data/2.5/forecast',
      {lat, lon, units: searchParams.units}
    ).then(formatForecastWeather)

    return {...formattedCurrentWeather, ...formattedForecastWeather};
  } else {

    const formattedCurrentWeather = await getWeatherData('data/2.5/weather',
      {...searchParams}
    ).then(formatCurrentWeather)

    const formattedForecastWeather = await getWeatherData('data/2.5/forecast',
      {...searchParams}
    ).then(formatForecastWeather)

    return {...formattedCurrentWeather, ...formattedForecastWeather};
  }
}

const formatToLocalTime = (secs, zone, format) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const timezoneToUTC = (timezone) => {
  return timezone >=0 ? 'UTC+'+timezone/3600 : 'UTC-'+Math.abs(timezone/3600);
}

const iconCodeToURL = (code) => {
  return `http://openweathermap.org/img/wn/${code}@2x.png`
}

export default getFormattedWeatherData;

export {formatToLocalTime};