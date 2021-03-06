import WeatherService from "./weather-service.js";

//PRIVATE

var _weatherService = new WeatherService()

function drawWeather() {
	console.log("THE WEATHER MAN SAYS:", _weatherService.Weather)
	let weather = _weatherService.Weather
	let template = weather.Template()
	document.getElementById('weather').innerHTML = template
}


//PUBLIC
export default class WeatherController {

	constructor() {
		_weatherService.addSubscriber('weather', drawWeather)
		_weatherService.getWeather()
	}

	renderWeather() {
		drawWeather()
	}
}
