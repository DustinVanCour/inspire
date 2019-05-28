export default class Image {
  constructor(data) {
    this.id = data.id
    this.url = data.url || "https://splashbase.s3.amazonaws.com/snapwiresnaps/regular/tumblr_ohdc5njKun1teue7jo1_1280.jpg"
    this.copyright = data.copyright
    this.site = data.site
  }
}