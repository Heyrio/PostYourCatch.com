
//This is the main page member area route where only logged in users can see


const express = require('express');
const router = express.Router();



router.get('/dashboard', (req, res) => res.send('Welcome member area'));



module.exports = router;