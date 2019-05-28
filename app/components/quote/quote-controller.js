import QuoteService from "./quote-service.js";

//PRIVATE
let _qs = new QuoteService()

function _drawQuote() {
  let quoteService = _qs.Quotes
  let template = quoteService.Template()
  document.getElementById('quote').innerHTML = template
}


//PUBLIC
export default class QuoteController {
  constructor() {
    console.log('QuoteController')
    _qs.addSubscriber('quote', _drawQuote)
    _qs.getAllQuotes()
  }

  renderQuote() {
    _drawQuote()
  }
}
