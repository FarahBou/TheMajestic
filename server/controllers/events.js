const Event = require('../models/event');

exports.postAddEvent = (req, res, next) => {
    console.log("controller", req.body);
    const event = new Event(req.body);
    event
        .save()
        .then(result => {
            res.send('saved')
        })
        .catch(err => {
            console.log(err)
        });
};

exports.postDeleteEvent = (req, res, next) => {
    console.log(req.body.id);
    Event.deleteById(req.body.id)
        .then(() => {
            console.log('destroyed');
        })
        .catch(err => {
            console.log(err)
        });
};

exports.getEvents = (req, res, next) => {
    Event.fetchAll()
        .then(events => {
            res.json({
                events: events,
            });
        })
        .catch(err => {
            console.log(err);
        });
};