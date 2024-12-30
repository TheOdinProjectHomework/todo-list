import "./styles.css";

console.log("Webpack is running: npx webpack serve");

// Global Variables
let allProjects = [];
let allTodos = [];

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

// dom module //
const todoCard = (title, description, dueDate, priority) => {
    let divCard = document.createElement('div');
    divCard.className = 'todoCard';
    let titleH4 = document.createElement('h4');
    titleH4.textContent = title;
    let descP = document.createElement('p');
    descP.textContent = description;
    let date = document.createElement('p');
    date.textContent = dueDate;
    divCard.appendChild(titleH4);
    divCard.appendChild(descP);
    divCard.appendChild(date);
    if(priority === "low"){
        divCard.style.border = "1px solid yellow";
    } else if(priority === "medium"){
        divCard.style.border = "1px solid green";
    } else {
        divCard.style.border = "1px solid red";
    }
    return divCard;
}

const projectCard = (title) => {
    let divCard = document.createElement('div');
    let titleP = document.createElement('p');
    titleP.innerText = title;
    divCard.appendChild(titleP);
    return divCard;
}

// object creation logic //
let testProject = new Project('default', 'testing class');
let todo1 = new Todo('shower', 'take shower', new Date, 'low', false);
console.log(testProject);
console.log(todo1);
testProject.addTodo(todo1);
console.log(testProject);
allProjects.push(testProject);
allTodos.push(todo1);

// form post logic
let form = document.getElementById('newTodoForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let title = document.getElementById('fTitle');
    let description = document.getElementById('fDescription');
    let dueDate = document.getElementById('fDate');
    let priority = document.querySelector('input[name="priority"]:checked');
    let newTodo = new Todo(title.value, description.value, dueDate.value, priority.value);
    allTodos.push(newTodo);
    todosDiv.innerHTML = "";
    loadTodos();
    console.log(newTodo);
})

let projectForm = document.getElementById("newProjectForm");
projectForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let projectTitle = document.getElementById("projectTitle");
    let newProject = new Project(projectTitle.value);
    allProjects.push(newProject);
    projectsDiv.innerHTML = "";
    loadProjects();
});

// index logic //
let projectsDiv = document.getElementById('projects');
let todosDiv = document.getElementById('newTodo');
console.log(allProjects);

const loadProjects = () => {
    allProjects.forEach((project) => {
        let p = projectCard(project.title);
        projectsDiv.appendChild(p);
    })
}

const loadTodos = () => {
    allTodos.forEach((todo) => {
        let x = todoCard(todo.title, todo.description, todo.dueDate, todo.priority);
        todosDiv.appendChild(x);
    })
}

loadProjects();
loadTodos();