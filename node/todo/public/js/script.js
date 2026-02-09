const apiUrl = '/todos';


// Load tasks on page load
window.onload = fetchTodos;


function fetchTodos() {
fetch(apiUrl)
.then(res => res.json())
.then(data => {
const list = document.getElementById('taskList');
list.innerHTML = '';


data.forEach(todo => {
const li = document.createElement('li');
li.className = 'list-group-item d-flex justify-content-between align-items-center';


const span = document.createElement('span');
span.textContent = todo.text;
if (todo.completed) span.classList.add('completed');


const btnGroup = document.createElement('div');


const completeBtn = document.createElement('button');
completeBtn.className = 'btn btn-success btn-sm me-2';
completeBtn.textContent = '✔';
completeBtn.onclick = () => toggleComplete(todo.id);


const deleteBtn = document.createElement('button');
deleteBtn.className = 'btn btn-danger btn-sm';
deleteBtn.textContent = '✖';
deleteBtn.onclick = () => deleteTask(todo.id);


btnGroup.appendChild(completeBtn);
btnGroup.appendChild(deleteBtn);


li.appendChild(span);
li.appendChild(btnGroup);
list.appendChild(li);
});
});
}


function addTask() {
const input = document.getElementById('taskInput');
const text = input.value.trim();


if (!text) return alert('Please enter a task');


fetch(apiUrl, {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ text })
})
.then(() => {
input.value = '';
fetchTodos();
});
}


function toggleComplete(id) {
fetch(`${apiUrl}/${id}`, {
method: 'PUT'
}).then(fetchTodos);
}


function deleteTask(id) {
fetch(`${apiUrl}/${id}`, {
method: 'DELETE'
}).then(fetchTodos);
}