'use strict';
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('santasWorkshop.sqlite');

module.exports = (name, toy) => {
    return new Promise((resolve, reject) => {
        db.run(`DELETE FROM toyBag WHERE name="${name}" AND toy="${toy}"`, (error) => {
            if(error) {
                return console.log('error deleting child', error);
            }
            resolve();
        })
    })
}
