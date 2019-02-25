'use strict';

/**
 * Returns object's property
 * @param {object} object - The target object.
 * @param {string} prop - The name of the property of the object to be returned.
 * @return {object} The returned property
 */
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