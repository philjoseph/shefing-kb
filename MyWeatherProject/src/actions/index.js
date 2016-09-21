import axios from 'axios';

const API_KEY='f5f9d3efc0408efc24459a003f46a61c';
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER='FETCH_WEATHER';

export function fetchWeather(city){
	const url=`${ROOT_URL}&q=${city},il`;
	const request=axios.get(url);

	return{
		type:FETCH_WEATHER,
		payload:request
	};
}