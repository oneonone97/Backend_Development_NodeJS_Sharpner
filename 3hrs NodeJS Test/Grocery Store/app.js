const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const app = express();

// Connect to MySQL
const db = require('./config');

db.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log('Connected to MySQL');
});

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Set up the view engine (EJS)
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
  db.query('SELECT * FROM ration', (err, results) => {
    if (err) throw err;
    // console.log(results);
    res.render('index', {expenses : results });
  });
});

app.post('/addData', (req,res)=>{
    const {name, description, Price, Quantity} = req.body;
    const newData = {name, description, Price, Quantity};

    db.query('INSERT INTO ration SET ?', newData, (err, result) => {
        if (err) console.log(err);
        res.redirect('/');
  });
})

app.get('/buy1/:id', (req,res) => {
    const id = req.params.id;
    db.query("SELECT Quantity FROM ration WHERE id = " + id, (err, result) =>{
        if(err) console.log(err);
        const currentQuantity = result[0].Quantity;
        db.query("UPDATE ration SET Quantity = " + (currentQuantity - 1) + " WHERE id = " + id, (err, result)=>{
            if(err) console.log(err);
            res.redirect('/');
        });
    });
});

app.get('/buy2/:id', (req,res) => {
    const id = req.params.id;
    db.query("SELECT Quantity FROM ration WHERE id = " + id, (err, result) =>{
        if(err) console.log(err);
        const currentQuantity = result[0].Quantity;
        db.query("UPDATE ration SET Quantity = " + (currentQuantity - 2) + " WHERE id = " + id, (err, result)=>{
            if(err) console.log(err);
            res.redirect('/');
        });
    });
});

app.get('/buy3/:id', (req,res) => {
    const id = req.params.id;
    db.query("SELECT Quantity FROM ration WHERE id = " + id, (err, result) =>{
        if(err) console.log(err);
        const currentQuantity = result[0].Quantity;
        db.query("UPDATE ration SET Quantity = " + (currentQuantity - 3) + " WHERE id = " + id, (err, result)=>{
            if(err) console.log(err);
            res.redirect('/');
        });
    });
});


app.listen(3000);
