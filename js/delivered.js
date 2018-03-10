'use strict';
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('santasWorkshop.sqlite');

module.exports = (name) => {
    return new Promise((resolve, reject) => {
        db.run(`UPDATE toyBag SET delivered=1 WHERE name="${name}"`, (error, data) => {
            resolve(data);
        })
    })
}