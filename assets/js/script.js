let tasks = [
  { id: 1, description: "Hacer mercado", completed: false },
  { id: 2, description: "Estudiar para la prueba", completed: false },
  { id: 3, description: "Sacar a pasear a Tobby", completed: false },
];

const taskInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const totalTask = document.getElementById("total-task");
const completedTask = document.getElementById("completed-task");
const todoList = document.getElementById("todo-list");

function addTask() {
  const description = taskInput.value;

  if (description !== "") {
    const newTask = {
      id: Date.now(),
      description: description,
      completed: false,
    };

    tasks.push(newTask);
    taskInput.value = "";
    renderTasks();
  }
}

function renderTasks() {
  todoList.innerHTML = "";

  tasks.forEach((task) => {
    const row = document.createElement("tr");

    row.innerHTML = `
            <td>${task.id}</td>
            <td>${task.description}</td>
            <td><input type="checkbox" ${
              task.completed ? "checked" : ""
            } onchange="toggleTask(${task.id})"></td>
            <td><button class="delete-btn" onclick="deleteTask(${
              task.id
            })">❌</button></td>
        `;

    todoList.appendChild(row);
  });

  updateCounters();
}

function updateCounters() {
  totalTask.textContent = tasks.length;
  completedTask.textContent = tasks.filter((task) => task.completed).length;
}

function deleteTask(taskId) {
  tasks = tasks.filter((task) => task.id !== taskId);
  renderTasks();
}

function toggleTask(taskId) {
  const task = tasks.find((task) => task.id === taskId);
  if (task) {
    task.completed = !task.completed;
    renderTasks();
  }
}

addBtn.addEventListener("click", addTask);

window.onload = renderTasks;
