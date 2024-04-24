const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve the login form
app.get('/login', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Login</title>
        </head>
        <body>
            <h1>Login</h1>
            <form action="/login" method="POST">
                <input type="text" name="username" placeholder="Enter your username">
                <button type="submit">Login</button>
            </form>
        </body>
        </html>
    `);
});

// Handle login form submission
app.post('/login', (req, res) => {
    const { username } = req.body;
    // Store the username in local storage (for demonstration purposes, we'll use an object)
    fs.writeFileSync('username.txt', `${username}:\n`, { flag: 'a' });
    res.redirect('/');
});

// Serve the send message form
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Send Message</title>
        </head>
        <body>
            <h1>Send Message</h1>
            <form action="/" method="POST">
                <input type="text" name="username" value="<%= username %>" readonly>
                <input type="text" name="message" placeholder="Enter your message">
                <button type="submit">Send</button>
            </form>
        </body>
        </html>
    `);
});

// Handle message submission (you can customize this part)
app.post('/', (req, res) => {
    const { username, message } = req.body;
    // Store the message in the file (for demonstration purposes, we'll use a text file)
    fs.writeFileSync('username.txt', `${username}: ${message}\n`, { flag: 'a' });
    res.redirect('/');
});

// Start the server
app.listen(port, () => {
    console.log(`Chat app listening at http://localhost:${port}`);
});
