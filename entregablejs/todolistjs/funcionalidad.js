let taskInput = document.getElementById('taskInput');
let taskList = document.getElementById('taskList');
let addTaskButton = document.getElementById('addTaskButton');

addTaskButton.addEventListener('click', addTask);

function addTask() {
  let taskText = taskInput.value.trim();
  if (taskText !== '') {
    let task = document.createElement('li');

    let taskTextElement = document.createElement('span');
    taskTextElement.textContent = taskText;
    taskTextElement.classList.add('task-text');
    task.appendChild(taskTextElement);

    let buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    let completeButton = document.createElement('button');
    completeButton.textContent = 'Completar';
    completeButton.classList.add('complete-button');
    completeButton.addEventListener('click', toggleTaskCompletion);
    buttonContainer.appendChild(completeButton);

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', deleteTask);
    buttonContainer.appendChild(deleteButton);

    task.appendChild(buttonContainer);

    taskList.appendChild(task);
    taskInput.value = '';
  }
}

function toggleTaskCompletion(event) {
  let taskTextElement = event.target.parentNode.parentNode.querySelector('.task-text');
  taskTextElement.classList.toggle('completed');
}

function deleteTask(event) {
  let task = event.target.parentNode.parentNode;
  taskList.removeChild(task);
}
