const {createTables} = require('../js/createDB/makeTable');
const {assert: {notPropertyVal}} = require('chai');
const removeToy = require('../js/removeToy');
const getChildrenNames = require('../js/getChildrenNames');

describe('removing toy', () => {
    afterEach((done) => {
        createTables()
        .then(() => {
            done();
        })
    })
    it('should remove toy', () => {
        let toy = 'pokemon';
        let name = "Ash";
        return removeToy(name, toy)
        .then(data => {
            return getChildrenNames(name);
        })
        .then(toyBag => {
            toyBag.forEach(toy => {
                notPropertyVal(toy, 'name', name);
                notPropertyVal(toy, 'toy', toy);
            })
        })
    })
})