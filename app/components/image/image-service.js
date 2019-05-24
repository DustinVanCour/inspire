import Image from "../../models/image.js";

Image
//PRIVATE

// @ts-ignore
const imgApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/images',
	timeout: 3000
});

let _state = {
	image: {}
}

let _subscribers = {
	image: []
}

function _setState(propName, data) {
	_state[propName] = data
	_subscribers[propName].forEach(fn => fn())
}

//PUBLIC
export default class ImageService {

	addSubscriber(propName, fn) {
		_subscribers[propName].push(fn)
	}

	get Image() {
		return _state.image
	}

	getAllImages() {
		imgApi.get()
			.then(response => {
				console.log(response)
				let data = new Image(response.data)
				_setState('image', data)
			})
			.catch(err => {
				console.error(err)
			})
	}
}
