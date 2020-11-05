const mongodb = require('mongodb');
const getDb = require('../util/mongodb').getDb;
const nonWorkingDays = require('../data/nonWorkingDays');

class Event {
    constructor(event){
        this.day = event.day;
        this.hour = event.hour;
        this.info = event.userInfo;
    }

    save() {
        const db = getDb();
        return db.collection('reservations')
            .insert({day: this.day, hour: this.hour, info: this.info})
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
            .collection('reservations')
            .find({}).project({day:1, hour:1, _id: 0})
            .toArray()
            .then(events => {
                // console.log(events);
                const nonWorkingDaysFR = [];
                nonWorkingDays.map(nonWorkingDay => {
                    nonWorkingDay = nonWorkingDay.split('-');
                    nonWorkingDaysFR.push(nonWorkingDay.reverse().join('-'));
                })
                // console.log(events);
                return [nonWorkingDaysFR, events];
            })
            .catch(err => {
                console.log(err);
            });        
    }

    static deleteById(id) {
        const db = getDb();
        return db
            .collection('reservations')
            .deleteOne({ _id: new mongodb.ObjectId(id)})
            .then(result => {
                return('deleted');
            })
            .catch(err => {
                console.log(err);
            });        
    }
}

module.exports = Event;