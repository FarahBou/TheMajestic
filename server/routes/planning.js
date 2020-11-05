//const path =require('path');
const express = require('express');

const eventsController = require('../controllers/events');

const router = express.Router();

router.post('/add-event', eventsController.postAddEvent);
router.post('/delete-event', eventsController.postDeleteEvent);
router.get('/get-events', eventsController.getEvents);

exports.routes = router;