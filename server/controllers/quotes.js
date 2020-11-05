const Quote = require('../models/quote');

exports.postAddQuote = (req, res, next) => {
    console.log(req.body);
    const quote = new Quote(req.body);
    quote
        .save()
        .then(result => {
            res.send('saved')
        })
        .catch(err => {
            console.log(err)
        });
};

exports.postDeleteQuote = (req, res, next) => {
    console.log(req.body.id);
    Quote.deleteById(req.body.id)
        .then(() => {
            console.log('destroyed');
        })
        .catch(err => {
            console.log(err)
        });
};

exports.getQuotes = (req, res, next) => {
    Quote.fetchAll()
        .then(quotes => {
            res.json({
                quotes: quotes,
            });
        })
        .catch(err => {
            console.log(err);
        });
};