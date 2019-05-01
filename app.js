const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();
require('./database')
const port = process.env.PORT || 3000;

// static file directory 
app.use(express.static(path.join(__dirname,'/public')));


// Template Engine
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, '/views'));

//partials directory
hbs.registerPartials(path.join(__dirname, '/partials'));

//BodyParser
app.use(express.urlencoded({ extended: false }));

// Routes
app.get('/', (req, res)=>{
    res.render('index');
});


app.get('/home',(req, res)=>{
    res.render('home');
});


app.listen(port,()=>{
    console.log('Server is running on port ' + port);
});