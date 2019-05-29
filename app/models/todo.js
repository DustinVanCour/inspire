export default class Todo {
  constructor(data) {
    console.log("in todo")
    this.completed = data.completed
    this._id = data._id
    this.description = data.description || 'No Description'
    this.user = data.user
  }
  get Template() {
    return `<input type="checkbox" name="toggler" ><p>${this.description}</p><button class="btn btn-secondary btn-sm" type="submit" onclick="app.controllers.todoController.removeTodo('${this._id}')">Remove</button>`
  }
}