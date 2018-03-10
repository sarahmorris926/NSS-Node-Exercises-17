const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database("santasWorkshop.sqlite");
const { toyBag } = require('../../data/toyBag');

module.exports.createTables = () => {
    return new Promise( (resolve, reject) => {
        db.run(`DROP TABLE IF EXISTS toyBag`)
        .run(`CREATE TABLE IF NOT EXISTS toyBag (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, toy TEXT, delivered INTEGER)`, (err) => {
            if (err) return reject(err);
            resolve(insertRows());
        })
    })
}

const insertRows = () => {
    return Promise.all(toyBag.map( ({name, toy, delivered}) => {
        return new Promise( (resolve, reject) => {
            db.run(`INSERT INTO toyBag VALUES (null, "${name}", "${toy}", "${delivered}")`, function(err) {
                if (err) return reject(err);
                resolve(this.lastID)
            });
        });
    }));
};
