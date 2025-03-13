document.addEventListener("DOMContentLoaded", loadTasks);

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", addTask);
taskList.addEventListener("click", manageTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const task = { text: taskText, completed: false };
    const tasks = getTasksFromStorage();
    tasks.push(task);
    saveTasksToStorage(tasks);

    renderTasks();
    taskInput.value = "";
}

function manageTask(event) {
    if (event.target.classList.contains("delete-btn")) {
        deleteTask(event.target.parentElement);
    } else if (event.target.tagName === "LI") {
        toggleComplete(event.target);
    }
}

function deleteTask(taskElement) {
    const tasks = getTasksFromStorage();
    const updatedTasks = tasks.filter(task => task.text !== taskElement.firstChild.textContent);
    saveTasksToStorage(updatedTasks);
    renderTasks();
}

function toggleComplete(taskElement) {
    const tasks = getTasksFromStorage();
    const taskText = taskElement.firstChild.textContent;
    tasks.forEach(task => {
        if (task.text === taskText) {
            task.completed = !task.completed;
        }
    });
    saveTasksToStorage(tasks);
    renderTasks();
}

function getTasksFromStorage() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
}

function saveTasksToStorage(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
    taskList.innerHTML = "";
    const tasks = getTasksFromStorage();
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = task.text;
        if (task.completed) {
            li.classList.add("completed");
        }
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.classList.add("delete-btn");
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}

function loadTasks() {
    renderTasks();
}
