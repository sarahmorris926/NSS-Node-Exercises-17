const sqlite3 = require('sqlite3').verbose();
const { createTables } = require('./makeTable');

(function createDb() {
    new sqlite3.Database('santasWorkshop.sqlite', () => {
        createTables()
        .then( (data) => {
            console.log('names', data);
        })
        .catch( (err) => {
            console.log('error in db.js', err)
        })
    })
}()) 