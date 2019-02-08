'use strict';

const get = function (object, prop) {
    let propArr = prop.split(".").filter(str => str !== "");

    for (prop of propArr) {
        object = object[prop];

        if (object === undefined) {
            return object;
        }
    }

    return object;
};