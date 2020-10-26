"use strict";
var displayColorSpear = function () {
    var colors = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        colors[_i] = arguments[_i];
    }
    for (var i in colors) {
        console.log(colors[i]);
    }
    // console.log(colors);
};
var colors = ['Red', 'Green', 'Blue'];
displayColorSpear.apply(void 0, colors);
