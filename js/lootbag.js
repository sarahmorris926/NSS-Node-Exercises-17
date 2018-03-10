const [,, ...args] = process.argv;
const addToy = require('./addToy');
const removeToy = require('./removeToy');
const getByName = require('./getByName');
const getAllChildren = require('./getAllChildren');
const setDeliveredStatus = require('./delivered');

let toy = null;
let name = null;


