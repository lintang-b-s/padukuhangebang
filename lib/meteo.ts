import { fetchWeatherApi } from "openmeteo";
import { IconType } from "react-icons";

export interface WeatherRequest {
  lat: number;
  lon: number;
}

export interface WeatherResponse {
  temperature2m: number;
  weatherCode: number;
}

// wmo codes map
export const weatherCodesMap = {
  0: "Cerah",
  1: "Cerah Berawan",
  2: "Berawan",
  3: "Mendung",
  45: "Kabut",
  48: "Kabut Berawan",
  51: "Gerimis",
  53: "Gerimis",
  55: "Gerimis",
  56: "Gerimis",
  57: "Gerimis",
  61: "Hujan Ringan",
  63: "Hujan Sedang",
  65: "Hujan Lebat",
  66: "Hujan Sedang",
  67: "Hujan Lebat",
};

export const fetchWeather = async ({
  lat,
  lon,
}: WeatherRequest): Promise<WeatherResponse> => {
  try {
    const params = {
      latitude: lat,
      longitude: lon,
      hourly: ["temperature_2m", "weather_code"],
    };
    const url = "https://api.open-meteo.com/v1/forecast";
    const responses = await fetchWeatherApi(url, params);

    const response = responses[0];

    // Attributes for timezone and location
    const utcOffsetSeconds = response.utcOffsetSeconds();
    const timezone = response.timezone();
    const timezoneAbbreviation = response.timezoneAbbreviation();
    const latitude = response.latitude();
    const longitude = response.longitude();

    const hourly = response.hourly()!;

    // Note: The order of weather variables in the URL query and the indices below need to match!
    const weatherData = {
      hourly: {
        time: [
          ...Array(
            (Number(hourly.timeEnd()) - Number(hourly.time())) /
              hourly.interval()
          ),
        ].map(
          (_, i) =>
            new Date(
              (Number(hourly.time()) +
                i * hourly.interval() +
                utcOffsetSeconds) *
                1000
            )
        ),
        temperature2m: hourly.variables(0)!.valuesArray()!,
        weatherCode: hourly.variables(1)!.valuesArray()!,
      },
    };

    const lastLen = weatherData.hourly.time.length;

    return {
      weatherCode: weatherData.hourly.weatherCode[lastLen - 1],
      temperature2m: weatherData.hourly.temperature2m[lastLen - 1],
    };
  } catch (error) {
    throw new Error("Failed to fetch search results");
  }
};
