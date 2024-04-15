const http = require('http');
const express = require('express');

const app = express();

app.use((req, res, next) =>{
    console.log('In the Middleware');
    next(); // it allows the request to continue to the next middleware
});

app.use((req, res, next) =>{
    console.log('In the second Middleware');
    // res.send('<h1>Hello to nodejs</h1>');
    next();
});

app.use((req, res, next) =>{
    console.log('In the third Middleware');
    res.send('{key1:value}');
});

const server = http.createServer(app);

server.listen(3000);
