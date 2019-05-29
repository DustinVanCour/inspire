export default class Todo {
  constructor(data) {
    console.log("in todo")
    this.completed = data.completed
    this._id = data._id
    this.description = data.description || 'No Description'
    this.user = data.user
  }
  get Template() {
    return `<h1>${this.description}</h1>`
  }
}