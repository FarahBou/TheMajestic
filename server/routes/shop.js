//const path =require('path');
const express = require('express');

const quotesController = require('../controllers/quotes');

const router = express.Router();

router.get('/testAPI', quotesController.getQuotes);

module.exports = router;