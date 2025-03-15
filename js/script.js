function addTask(columnId) {
    const taskText = prompt("Enter task name:");
    if (!taskText) return;
    
    const taskList = document.querySelector(`#${columnId} .task-list`);
    const task = document.createElement('div');
    task.classList.add('task');
    task.innerHTML = `${taskText} <button class='delete-btn' onclick='deleteTask(this)'>X</button>`;
    taskList.appendChild(task);
}

function deleteTask(button) {
    button.parentElement.remove();
}

document.addEventListener('DOMContentLoaded', () => {
    const activityList = document.getElementById('activity-list');
    const activities = [
        'A school project in progress',
        'Sophia left a comment',
        'Zara uploaded 3 documents',
        'Katerin uploaded 3 documents'
    ];
    
    activities.forEach(activity => {
        let li = document.createElement('li');
        li.textContent = activity;
        li.addEventListener('click', () => alert(activity));
        activityList.appendChild(li);
    });
});

