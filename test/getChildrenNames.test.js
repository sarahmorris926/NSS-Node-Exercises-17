const { assert: {isObject, isArray, propertyVal} } = require('chai');
const getChildrenNames = require('../js/getChildrenNames.js');
const getAllChildren = require('../js/getAllChildren.js');

describe('get all toys for one child', () => {
    let name = 'Steve';
    it('should return an array of objects', () => {
        return getChildrenNames(name)
        .then(toyBag => {
            isArray(toyBag);
            isObject(toyBag[0]);
        })
    })
    it('should return toys for certain child', () => {
        return getChildrenNames(name)
        .then(toyBag => {
            toyBag.forEach(toy => {
                propertyVal(toy, 'name', name);
            })
        })
    })
})
