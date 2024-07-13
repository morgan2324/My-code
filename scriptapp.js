let tasks = [];

document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskText = document.getElementById('new-task').value;
    if (taskText.trim() !== '') {
        tasks.push({ text: taskText, done: false });
        document.getElementById('new-task').value = '';
        renderTasks();
    }
});

function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task.text;
        if (task.done) {
            li.classList.add('done');
        }

        const doneButton = document.createElement('button');
        doneButton.textContent = '✔';
        doneButton.addEventListener('click', function() {
            tasks[index].done = !tasks[index].done;
            renderTasks();
        });

        li.appendChild(doneButton);
        taskList.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', renderTasks);
