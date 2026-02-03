const express = require('express');
const path = require('path');
const fs = require('fs');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.listen(PORT, () => {
    console.log("server is started");
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, "about.html"));
});

app.get('/registration', (req, res) => {
    res.sendFile(path.join(__dirname, "register.html"));
});

app.post('/registration', (req, res) => {
    const { email, password } = req.body;

    let users = [];
    if (fs.existsSync("users.json")) {
        users = JSON.parse(fs.readFileSync("users.json", "utf-8"));
    }

    users.push({ email, password });
    fs.writeFileSync("users.json", JSON.stringify(users, null, 2));

    res.cookie("user", email); 
    res.send(" Registration successful");
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, "login.html"));
});
