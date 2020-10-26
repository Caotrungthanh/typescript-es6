"use strict";
var bonus = function (value, tax) {
    if (value === void 0) { value = 10; }
    if (tax === void 0) { tax = 20; }
    console.log(value + tax);
};
bonus();
