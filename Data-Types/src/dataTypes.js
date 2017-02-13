'use strict'

const dataTypes = function dataTypes (arg){
    //For strings, return its length.
    if (typeof arg === 'string') return arg.length;

    //For null or undefined return string 'no value'
    if (arg === null || arg === undefined) return 'no value';

    //For booleans return the boolean
    if (typeof arg === 'boolean') return arg;

    //For numbers return a string showing how it compares to hundred
    if (typeof arg === 'number'){
        if (arg < 100) return 'less than 100';
        if (arg > 100) return 'more than 100';
        return 'equal to 100';
    }

    //For arrays return the 3rd index, or undefined{ if it doesn't exist.
    if (arg.constructor === Array){
        if (arg.length < 3) return undefined;
        return arg[2];
    }

    //For functions call the function and pass in true as an argument and return it.
    if (typeof arg === 'function') return arg(true);
}

module.exports = dataTypes;