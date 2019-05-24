export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);

    // HEY FUN FACT 
    // Have you ever wanted to know the temperature measured in kelvin? That is what this data returns!
    // data.main.temp is the temperature in Kelvin
    // You should probably convert the temperature data to either F or C
    this.id = data.weather.id
    this.city = data.name
    this.icon = data.weather.icon
    this.kelvin = data.main.temp
    this.humidity = data.main.humidity
    this.lowTemp = data.main.temp_min
    this.highTemp = data.main.temp_max
  }

  Template() {
    return `
    <div class="col">${this.city}</div>`
  }
}