export default class Quote {
  constructor(data) {
    this.id = data.quote.id
    this.author = data.quote.author
    this.body = data.quote.body
  }

  Template() {
    return `<div class="row">
        <div class="col">
          <h5>"${this.body}"</h5>
          <h6>- ${this.author} -</h6>
        </div>
      </div>
    `
  }
}