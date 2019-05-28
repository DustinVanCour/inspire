export default class Quote {
  constructor(data) {
    this.id = data.quote.id
    this.author = data.quote.author
    this.body = data.quote.body
  }

  Template() {
    return `
    <div class="row">
			<div class="col"></div>
			<div class="col-9">
				<div class="row">
          <div class="col">
          <h5><center>"${this.body}"</center></h5>
          </div>
				</div>
				<div class="row">
          <div class="col">
          <h6><center>- ${this.author} -</center></h6>
          </div>
				</div>
			</div>
			<div class="col"></div>
		</div>
    `
  }
}