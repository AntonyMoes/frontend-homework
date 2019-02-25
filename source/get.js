'use strict';

const get = function (object, prop) {
    if (typeof object !== 'object' || typeof prop !== 'string') {
        return null;
    }

    let propArr = prop.split('.').filter(str => str !== '');

    for (prop of propArr) {
        object = object[prop];

        if (object === undefined) {
            return object;
        }
    }

    return object;
};