const {createTables} = require('../js/createDB/makeTable');
const {assert: {propertyVal}} = require('chai');
const setDeliveredStatus = require('../js/delivered');
const getByName = require('../js/getByName');

describe('deliver a toy', () => {
    let name = 'Steve';
    afterEach((done) => {
        createTables()
        .then(() => {
            done();
        })
    })
    it('should update delivered status to 1 for all of a certain kid\'s toy', () => {
        return setDeliveredStatus(name)
        .then(data => {
            return getByName(name);
        })
        .then(toyBag => {
            toyBag.forEach(toy => {
                propertyVal(toy, 'delivered', 1);
            })
        })
    })
})