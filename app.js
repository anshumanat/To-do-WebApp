 // Get elements
const titleInput = document.getElementById('title-input');
const descriptionInput = document.getElementById('description-input');
const addBtn = document.getElementById('add-btn');
const deleteAllBtn = document.getElementById('delete-all-btn');
const todoList = document.getElementById('todo-list');

// Add task
addBtn.addEventListener('click', function() {
    const taskTitle = titleInput.value.trim();
    const taskDescription = descriptionInput.value.trim();
    
    if (taskTitle !== "") {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${taskTitle}</strong><p>${taskDescription}</p>`;

        // Add complete task functionality
        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        // Add delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent event from bubbling up
            todoList.removeChild(li);
        });

        li.appendChild(deleteBtn);
        todoList.appendChild(li);
        titleInput.value = '';
        descriptionInput.value = '';
    }
});

// Delete all tasks
deleteAllBtn.addEventListener('click', function() {
    todoList.innerHTML = '';
});

