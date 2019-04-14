const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();


// static file directory 
app.use(express.static(path.join(__dirname,'/public')));


// Template Engine
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, '/views'));



// Routes
app.get('/', (req, res)=>{
    res.render('index');
});




app.listen(3000,()=>{
    console.log('Server is running...');
});