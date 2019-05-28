import ImageService from "./image-service.js";

//PRIVATE

const _is = new ImageService()

function _drawImage() {
  document.querySelector('#bg-image').style.backgroundImage = `url("${_is.Image.url}")`
}


//PUBLIC
export default class ImageController {
  constructor() {
    _is.addSubscriber('image', _drawImage)
    _is.getAllImages()
  }

  renderImage() {
    _drawImage()
  }
}

