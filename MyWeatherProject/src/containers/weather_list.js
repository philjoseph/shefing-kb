import React,{Component} from 'react';
import {connect} from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component{
	renderChart(cityData){
		const name=cityData.city.name;
		const temps=cityData.list.map(weather=>weather.main.temp);
		const pressures=cityData.list.map(weather=>weather.main.pressure);
		const humidities=cityData.list.map(weather=>weather.main.humidity);
		const {lat,lon}=cityData.city.coord;

		return (
			<tr key={name}>
				<td><GoogleMap lon={lon} lat={lat}/></td>
				<td><Chart data={temps} color="red"/></td>
				<td><Chart data={pressures} color="orange"/></td>
				<td><Chart data={humidities} color="blue"/></td>	
			</tr>);

	}
	render(){
		return(
			<table className="table table-hover">
				<thead>
				<tr>
					<th>City</th>
					<th>Temperature</th>
					<th>Pressure</th>
					<th>Humidity</th>
				</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderChart)}
				</tbody>
			</table>
			);
	}
}
function mapStateToProps({weather}){
	return{weather};
}
export default connect(mapStateToProps)(WeatherList);