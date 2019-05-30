export default class Todo {
  constructor(data) {
    console.log("in todo")
    this.completed = data.completed
    this._id = data._id
    this.description = data.description || 'No Description'
    this.user = data.user
  }
  get Template() {
    if (!this.completed) {
      return `<div class="row ml-3 align-items-center"><input type="checkbox" name="toggler" onclick="app.controllers.todoController.toggleTodoStatus('${this._id}')"><p class="todo-text m-0">${this.description}</p><button class="btn btn-secondary btn-sm" type="submit" onclick="app.controllers.todoController.removeTodo('${this._id}')">Remove</button></div>`
    }
    return `<div class="row ml-3 align-items-center"><input type="checkbox" checked name="toggler" onclick="app.controllers.todoController.toggleTodoStatus('${this._id}')"><label class="strikethrough"><p class="todo-text m-0">${this.description}</p></label><button class="btn btn-secondary btn-sm" type="submit" onclick="app.controllers.todoController.removeTodo('${this._id}')">Remove</button></div>`
  }
}