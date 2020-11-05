const mongodb = require('mongodb');
const getDb = require('../util/mongodb').getDb;
const nonWorkingDays = require('../data/nonWorkingDays');

class Event {
    constructor(content){
        this.content = content.event;
        this.info = content.userInfo;
        this.hour = content.hour;
    }

    save() {
        const db = getDb();
        return db.collection('events')
            .insert({content: this.content, info: this.info, hour: this.hour})
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
            .collection('events')
            .find({}).project({content:1, hour:1, _id: 0})
            .toArray()
            .then(events => {
                // console.log(events);
                const newTab = [];
                // events.map(event => {
                //     // Array.prototype.push.apply(newTab, event.content);
                //     newTab.push(event.content);
                // })

                nonWorkingDays.map(nonWorkingDay => {
                    nonWorkingDay = nonWorkingDay.split('-');
                    newTab.push(nonWorkingDay.reverse().join('-'));
                })
                // console.log(newTab);
                return [newTab, events];
            })
            .catch(err => {
                console.log(err);
            });        
    }

    static deleteById(id) {
        const db = getDb();
        return db
            .collection('events')
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