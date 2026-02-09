const express = require('express');
const path = require('path');
const cookieParser=require('cookie-parser')
const fs = require('fs');
const { request } = require('http');
const app = express();
const PORT = 3000;
const loginMiddleware = (req, res, next) => {
    const user = req.cookies.user;
    if (!user) {
        return res.status(403).send("Please login to access dashboard");
    }
    next();
};
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, "about.html"));
});
app.get('/dashboard', loginMiddleware, (req, res) => {
    res.sendFile(path.join(__dirname, "dashbord.html"));
});


app.get('/registration', (req, res) => {
    res.sendFile(path.join(__dirname, "register.html"));
});

app.post('/registration', (req, res) => {

    console.log( req.body)
    const { email, password,gender,file } = req.body;
    
    let users = [];
    if (fs.existsSync("users.json")) {
        users = JSON.parse(fs.readFileSync("users.json", "utf-8"));
    }
    
    users.push({ email, password,gender,file });
    fs.writeFileSync("users.json", JSON.stringify(users, null, 2));
    
    res.cookie("user", email);
    res.send(" Registration successful");
});


app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, "login.html"));
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (!fs.existsSync("users.json")) {
        return res.send("No users found. Please register first.");
    }

    const users = JSON.parse(fs.readFileSync("users.json", "utf-8"));

    const foundUser = users.find(
        user => user.email === email && user.password === password
    );

    if (foundUser) {
        res.cookie("user", email);
        res.redirect("/dashboard");
    } else {
        res.send("Invalid email or password");
    }
});


app.listen(PORT, () => {
    console.log("server is started");
});