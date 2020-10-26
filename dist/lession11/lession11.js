"use strict";
var displayColor = function () {
    var colors = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        colors[_i] = arguments[_i];
    }
    // for(let i in arguments) {
    //     console.log(arguments[i]);
    // }
    console.log(colors);
};
displayColor('Red');
displayColor('Red', 'Green');
displayColor('Red', 'Green', 'Blue');
