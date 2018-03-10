
'use strict';

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('santasWorkshop.sqlite');
const toysArray = [];

module.exports = (name) => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM toyBag WHERE name="${name}"`,
      (error, data) => {
        resolve(data);
      })
  })
}