import ImageService from "./image-service.js";

//PRIVATE

const _is = new ImageService()

function _drawImage() {
  let imageService = _is.Image
  let template = imageService.Template()
  document.getElementById('bg-image').innerHTML = template
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

