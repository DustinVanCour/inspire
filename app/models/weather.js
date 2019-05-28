export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);

    // HEY FUN FACT 
    // Have you ever wanted to know the temperature measured in kelvin? That is what this data returns!
    // data.main.temp is the temperature in Kelvin
    // You should probably convert the temperature data to either F or C
    this.id = data.weather.id
    this.city = data.name
    this.icon = data.weather[0].icon
    this.kelvin = data.main.temp
    this.humidity = data.main.humidity
    this.lowTemp = data.main.temp_min
    this.highTemp = data.main.temp_max
  }

  kelToFar(temp) {
    let f = 1.8 * (temp - 273) + 32;
    return f.toFixed(0)
  }

  Template() {
    let f = this.kelToFar(this.kelvin) + "°"

    return `
    <div class="col"></div>
    <div class="col"></div>
    <div class="col float-right"><h4><img src="http://openweathermap.org/img/w/${this.icon}.png"> ${f} ${this.city}</h4>
   </div>
`
  }
}