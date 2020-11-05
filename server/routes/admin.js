//const path =require('path');
const express = require('express');

const quotesController = require('../controllers/quotes');

const router = express.Router();

router.post('/add-quote', quotesController.postAddQuote);
router.post('/delete-quote', quotesController.postDeleteQuote);

exports.routes = router;