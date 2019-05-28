export default class Image {
  constructor(data) {
    this.id = data.id
    this.url = data.url
    this.copyright = data.copyright
    this.site = data.site
  }

  Template() {
    return `
  <img src="${this.url}">`
  }
}