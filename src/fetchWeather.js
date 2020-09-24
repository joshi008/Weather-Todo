import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather"
const API_Key = "940c4af20516cdb64c86e01596f10029";

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_Key,
        }
    });

    return data;
}

export default fetchWeather
