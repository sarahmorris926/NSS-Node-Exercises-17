const { assert: {isObject, isArray} } = require('chai');
const getAllChildren = require('../js/getAllChildren');

describe('get all children', () => {
    it('should return an array of objects', () => {
        return getAllChildren()
        .then(children => {
            isArray(children);
            isObject(children[0]);
        })
    })
})