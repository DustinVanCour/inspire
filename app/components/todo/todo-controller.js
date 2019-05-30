import TodoService from "./todo-service.js";

//PUBLIC
const _todoService = new TodoService()

function _drawTodos() {
	let todos = _todoService.Todo
	let template = ''
	todos.forEach(todo => {
		template += todo.Template
	});
	document.getElementById('todos').innerHTML = template
}

function _drawError() {
	console.error('[TODO ERROR]', _todoService.TodoError)
	document.querySelector('#todo-error').textContent = `${_todoService.TodoError.message}`
}

//PRIVATE
export default class TodoController {
	constructor() {
		_todoService.addSubscriber('error', _drawError)
		_todoService.getTodos()
		_todoService.addSubscriber('todos', _drawTodos)
	}

	addTodo(e) {
		e.preventDefault()
		var form = e.target
		var todo = {
			description: form.description.value
		}
		_todoService.addTodo(todo)
		// form.reset()
	}

	toggleTodoStatus(todoId) {
		// asks the service to edit the todo status
		_todoService.toggleTodoStatus(todoId)
	}

	removeTodo(todoId) {
		// ask the service to run the remove todo with this id
		_todoService.removeTodo(todoId)
	}



}
