const taskInput = document.getElementById('addtask');
const addButton = document.getElementById('addbutton');
const deleteCompletedBtn = document.getElementById('delcom');
const clearAllBtn = document.getElementById('clearbt');
const taskList = document.getElementById('tasklist');

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const li = document.createElement('li');
    li.className = 'task-item';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
        li.classList.toggle('completed');
    });

    const span = document.createElement('span');
    span.textContent = taskText;

    li.appendChild(checkbox);
    li.appendChild(span);
    taskList.appendChild(li);

    taskInput.value = '';
}

deleteCompletedBtn.addEventListener('click', () => {
    const completedTasks = taskList.querySelectorAll('.task-item.completed');
    completedTasks.forEach(task => task.remove());
});

clearAllBtn.addEventListener('click', () => {
    taskList.innerHTML = '';
});

addButton.addEventListener('click', addTask);

taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});