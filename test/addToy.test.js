'use strict';
const { createTables } = require('../js/makeTable');
const { assert: {isFunction, isObject, isArray, equal} } = require('chai');

const { addToy } = require('../js/addToy.js')

describe('Add Toy Module', () => {
    describe('adding a toy', () => {
        let newToy = {
            name: "Pat",
            toy: "bicycle",
            delivered: "false"
        };
        beforeEach(done => {
            createTables().then(() => {
                done();
            });
        });
        it('should be a function', () => {
            isFunction(addToy);
        });
        it('should add a toy to the db', () => {
            return addToy(newToy).then(obj => {
                equal(5, obj.id);
            })
        })
    })
})