const mongodb = require('mongodb');
const getDb = require('../util/mongodb').getDb;

class Quote {
    constructor(content){
        this.content = content.quote;
    }

    save() {
        const db = getDb();
        return db.collection('quotes')
            .insertOne(this)
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                console.log(err);
            });
    }

    static fetchAll() {
        const db = getDb();
        return db
            .collection('quotes')
            .find()
            .toArray()
            .then(quotes => {
                //console.log(quotes);
                return quotes;
            })
            .catch(err => {
                console.log(err);
            });        
    }

    static deleteById(id) {
        const db = getDb();
        return db
            .collection('quotes')
            .deleteOne({ _id: new mongodb.ObjectId(id)})
            .then(result => {
                return('deleted');
            })
            .catch(err => {
                console.log(err);
            });        
    }
}

module.exports = Quote;