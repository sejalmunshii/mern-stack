const express = require('express');
const fs = require('fs');
const path = require('path');


const app = express();
const PORT = 3000;


const dataFile = path.join(__dirname, 'data', 'todos.json');


app.use(express.json());
app.use(express.static('public'));


function readTodos() {
const data = fs.readFileSync(dataFile, 'utf8');
return JSON.parse(data);
}


function writeTodos(todos) {
fs.writeFileSync(dataFile, JSON.stringify(todos, null, 2));
}


app.get('/todos', (req, res) => {
const todos = readTodos();
res.json(todos);
});


app.post('/todos', (req, res) => {
const todos = readTodos();
const newTodo = {
id: Date.now(),
text: req.body.text,
completed: false
};
todos.push(newTodo);
writeTodos(todos);
res.json(newTodo);
});


app.put('/todos/:id', (req, res) => {
const todos = readTodos();
const id = Number(req.params.id);


const todo = todos.find(t => t.id === id);
if (todo) {
todo.completed = !todo.completed;
writeTodos(todos);
res.json(todo);
} else {
res.status(404).json({ message: 'Todo not found' });
}
});


app.delete('/todos/:id', (req, res) => {
let todos = readTodos();
const id = Number(req.params.id);
todos = todos.filter(t => t.id !== id);
writeTodos(todos);
res.json({ message: 'Deleted successfully' });
});


app.listen(PORT, () => {
console.log("Server running");
});