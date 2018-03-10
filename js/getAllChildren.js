'use strict';
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('santasWorkshop.sqlite');

module.exports = () => {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM toyBag ORDER BY name`, (error, data) => {
            if(error) throw error;
            resolve(data);
        })
    })
}