const express = require('express');
const fs = require('fs');
const app = express();
const bodyParser = require("body-parser");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    fs.readFile('username.txt', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            data = 'No chat exists';
        }
        res.send(`
        ${data}<form action="/" onSubmit="document.getElementById('username').value=localStorage.getItem('username')" method="POST">
            <input id="message" name="message" type="text" placeholder="message">
            <input name="username" id="username">
            <button type="submit">Send</button>
        </form>
    `);
    });
});

app.post("/", (req, res) => {
    console.log(req.body.username);
    console.log(req.body.message);
    fs.writeFileSync("username.txt", `${req.body.username}: ${req.body.message}\n`, { flag: 'a' });
    res.redirect('/');
});

app.get("/login", (req, res) => {
    res.send(`
        <form action="/login" method="POST" onSubmit="localStorage.setItem('username', document.getElementById('username').value)">
            <input type="text" name="username" placeholder="username" id="username">
            <br />
            <button type="submit">Send</button>
        </form>
    `);
});

app.listen(3000, () => {
    console.log("Chat app listening at http://localhost:3000");
});
