'use strict';

const get = function (object, prop) {
    if (typeof object !== "object") {
        throw new TypeError("object expected");
    }

    if (typeof prop !== "string") {
        throw new TypeError("string expected");
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