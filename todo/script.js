let todo = [];
function updateLocalStorage() {
  localStorage.setItem("todo", JSON.stringify(todo));
}

function syncToDos() {
  const toDosFromLocalStorage = localStorage.getItem("todo");
  if (toDosFromLocalStorage) {
    todo = JSON.parse(toDosFromLocalStorage);
  }
}

syncToDos();

const inputTodo = document.querySelector("#input-todo");
const addBtn = document.querySelector("#add-button");
const listOfTodos = document.querySelector("#todo-list");

// Todos in die Liste adden / render Funktion
function addTodoToList() {
  // Input einfügen
  const textInput = inputTodo.value;

  // nur todos mit mehr als 3 Zeichen
  if (textInput.length < 3) {
    console.log("Please add at least 3 characters");
    return;
  }

  //neue Eigenschften erweitern, auf diesem DOM-Element
  const newTodo = {
    description: textInput,
    done: false,
  };
  todo.push(newTodo);

  //Input löschen
  inputTodo.value = "";

  //Listen Elemente werden erzeugt.
  const createListElement = document.createElement("li");
  createListElement.obj = newTodo;
  listOfTodos.appendChild(createListElement);

  // Checkbox Element
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  createListElement.appendChild(checkbox);
  // Label für Checkbox/ als erledigt abhacken
  const label = document.createElement("label");
  const textNode = document.createTextNode(textInput);
  label.appendChild(textNode);
  createListElement.appendChild(label);

  //  Todos streichen, wenn das Kontrollkästchen aktiviert ist
  checkbox.addEventListener("change", function () {
    if (createListElement.className != "checked") {
      createListElement.className = "checked";
    } else {
      createListElement.className = "";
    }
  });
}

//edit Status, wenn das Kontrollkästchen aktiviert ist
listOfTodos.addEventListener("change", function (e) {
  const stateOfDone = e.target.checked;
  const todoObj = e.target.parentElement.obj;
  todoObj.done = stateOfDone;
  console.log(todo);
});

addBtn.addEventListener("click", addTodoToList);

//remove done todos
const removeDoneTodos = document.querySelector("#remove-done-todos");
console.log(removeDoneTodos);
removeDoneTodos.addEventListener("click", function () {
  console.log("remove");
  for (let i = 0; i < listOfTodos.children.length; i++) {
    const todoObj = listOfTodos.children[i].obj;
    if (todoObj.done === true) {
      listOfTodos.children[i].hidden = true;
      todo.splice(i,1);
    }
  }
});
//Alle todos zeigen
const showAllTodos = document.querySelector("#all");
console.log(showAllTodos);
showAllTodos.addEventListener("click", function () {
  console.log("showAllTodos");
  for (let i = 0; i < listOfTodos.children.length; i++) {
    listOfTodos.children[i].hidden = false;
  }
});

//Filter für Open todos
const openTodosFilter = document.querySelector("#open");
openTodosFilter.addEventListener("click", function () {
  for (let i = 0; i < listOfTodos.children.length; i++) {
    const todoObj = listOfTodos.children[i].obj;
    if (todoObj.done === true) {
      listOfTodos.children[i].hidden = true;
    } else {
      listOfTodos.children[i].hidden = false;
      todoObj.done === false;
    }
  }
});

//Filter für Done todos
const doneTodosFilter = document.querySelector("#done");
doneTodosFilter.addEventListener("click", function () {
  for (let i = 0; i < listOfTodos.children.length; i++) {
    const todoObj = listOfTodos.children[i].obj;
    if (todoObj.done === false) {
      listOfTodos.children[i].hidden = true;
    } else {
      listOfTodos.children[i].hidden = false;
      todoObj.done === true;
    }
  }
});
