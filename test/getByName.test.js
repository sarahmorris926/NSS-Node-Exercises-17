const { assert: {isObject, isArray, propertyVal} } = require('chai');
const getByName = require('../js/getByName.js');
const getAllChildren = require('../js/getAllChildren.js');

describe('get all toys for one child', () => {
    let name = 'Steve';
    it('should return an array of objects', () => {
        return getByName(name)
        .then(toyBag => {
            isArray(toyBag);
            isObject(toyBag[0]);
        })
    })
    it('should return toys for certain child', () => {
        return getByName(name)
        .then(toyBag => {
            toyBag.forEach(toy => {
                propertyVal(toy, 'name', name);
            })
        })
    })
})
