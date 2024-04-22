const express = require('express');
const bodyParser = require('body-parser');

const app=express();

const shopRoutes =require('./routes/shop') ;

const adminRoutes = require('./routes/admin');

app.use(bodyParser.urlencoded({extended:false}));

app.use(shopRoutes);
app.use(adminRoutes);

app.use((req,res,next) => {
    res.status(404).send('<h1>Page not found</h1>')
});

app.listen(5000 , () => console.log("Server 5000 started working"))