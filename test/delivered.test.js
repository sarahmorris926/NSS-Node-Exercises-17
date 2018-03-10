const {createTables} = require('../js/createDB/makeTable');
const {assert: {propertyVal}} = require('chai');
const setDeliveredStatus = require('../js/delivered');
const getChildrenNames = require('../js/getChildrenNames');

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
            return getChildrenNames(name);
        })
        .then(toyBag => {
            toyBag.forEach(toy => {
                propertyVal(toy, 'delivered', 1);
            })
        })
    })
})