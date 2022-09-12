const state = {
  todos: [
    { description: "Learn more about HTML", done: true },
    { description: "Learn more about CSS", done: false },
    { description: "Learn more about JavaScript", done: true },
  ],
};

//Visualisierung des States

function renderTodos() {
  const list = document.querySelector("#list");
  list.innerHTML = "";

  state.todos.forEach((todo) => {
    const todoLi = document.createElement("li");
//Li wird um Eigenschaften im DOM erweitert/
    todoLi.todoObj = todo;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.done;

    /*Verbindung vom DOM zum State
    checkbox.addEventListener("change", (e) => {
      const newTodoDoneState = e.target.checked;
      todo.done = newTodoDoneState; 
    });*/

    todoLi.appendChild(checkbox);

    const todoText = document.createTextNode(todo.description);
    todoLi.appendChild(todoText);

    list.appendChild(todoLi);
  });
}
renderTodos();


const list = document.querySelector("#list");
list.addEventListener("change", (e) => {
    const checkbox = e.target;
    const liElement = checkbox.parentElement;
    const todo = liElement.todoObj;

    todo.done = checkbox.checked;

});