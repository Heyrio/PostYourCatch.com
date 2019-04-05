const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');

const app = express();
// DB Config
const db = require('./config/keys').MongoURI;

// Connecting to MongoDb

mongoose.connect(db, { useNewUrlParser: true })
	.then(() => console.log('MongoDb Connected...'))
	.catch(err => console.log(err));



// ejs
app.use(expressLayouts);
app.set('view engine', 'ejs')

// Bodyparser
app.use(express.urlencoded({ extended: false}));

//serving static files
app.use (express.static(__dirname + '/public'));
app.use (express.static(__dirname + '/images'));


// Routes

app.use('/', require('./routes/indexJs.js'));
app.use('/dashboard', require('./routes/memberArea.js'));


const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
