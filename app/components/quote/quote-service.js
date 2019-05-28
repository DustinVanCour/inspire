import Quote from "../../models/quote.js";


//PRIVATE
// @ts-ignore
const _quoteApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/quotes',
	timeout: 3000
});

let _state = {
	quote: {}
}

let _subscribers = {
	quote: []
}

function _setState(propName, data) {
	_state[propName] = data
	_subscribers[propName].forEach(fn => fn())
}

//PUBLIC
export default class QuoteService {

	addSubscriber(propName, fn) {
		_subscribers[propName].push(fn)
	}

	get Quotes() {
		return _state.quote
	}

	getAllQuotes() {
		_quoteApi.get()
			.then(response => {
				console.log(response)
				let data = new Quote(response.data)
				_setState('quote', data)
			})
			.catch(err => {
				console.error(err)
			})
	}
}
