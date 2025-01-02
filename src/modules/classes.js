// class module //
class Project {
    constructor(title, description) {
        this._title = title;
        this._description = description;
        this._todos = [];
    }

    get title() {
        return this._title;
    }

    get description() {
        return this._description;
    }

    get todos() {
        return this._todos;
    }

    addTodo (todo) {
        this._todos.push(todo);
    }

    deleteTodo (todoToDelete) {
        let updatedTodos = this._todos.filter(todo => todo !== todoToDelete);
        this._todos = [...updatedTodos];
    }
}

class Todo {
    constructor(title, description, dueDate, priority, checklist) {
        this._title = title;
        this._description = description;
        this._dueDate = dueDate;
        this._priority = priority;
        this._checklist = checklist;
    }

    get title() {
        return this._title;
    }

    get description() {
        return this._description;
    }

    get dueDate() {
        return this._dueDate;
    }

    get priority() {
        return this._priority;
    }

    get checklist() {
        return this._checklist;
    }

}

export { Project, Todo };