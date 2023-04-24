const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

taskForm.addEventListener("submit", addTask);
taskList.addEventListener("click", deleteTask);
taskList.addEventListener("click", completeTask);

function addTask(event) {
    event.preventDefault();
    if (taskInput.value.trim() !== "") {
        const taskText = taskInput.value;
        const newTask = document.createElement("li");
        newTask.innerText = taskText;
        newTask.classList.add("new", "animated", "fadeInLeft");
        const completeButton = document.createElement("button");
        completeButton.innerHTML = '<i class="far fa-check-circle"></i>';
        completeButton.classList.add("complete-btn");
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "X";
        deleteButton.classList.add("delete-btn");
        newTask.appendChild(completeButton);
        newTask.appendChild(deleteButton);
        taskList.appendChild(newTask);
        taskInput.value = "";
    }
}

function deleteTask(event) {
    if (event.target.classList.contains("delete-btn")) {
        const task = event.target.parentElement;
        task.classList.add("animated", "fadeOutRight");
        task.addEventListener("animationend", function () {
            task.remove();
        });
    }
}

function completeTask(event) {
    if (event.target.classList.contains("complete-btn")) {
        const task = event.target.parentElement;
        task.classList.toggle("completed");
    }
}
