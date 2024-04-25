const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.get('/contactus', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contact-form.html'));
});

// Route to handle form submission
app.post('/contactus', (req, res) => {
    // Process form data (save to database, send email, etc.)
    // Redirect user to success page
    res.redirect('/success');
});

// Route to serve the success message
app.get('/success', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'success.html'));
});

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);
