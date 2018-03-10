'use strict';

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('santasWorkshop.sqlite');

// adding a toy to db
module.exports.addToy = ({name, toy, delivered}) => {
    return new Promise( (resolve, reject) => {
        db.run(`INSERT INTO toyBag VALUES(null, "${name}", "${toy}", "${delivered}")`, function(error, data) {
            resolve({ id: this.lastID });
        })
    });
};