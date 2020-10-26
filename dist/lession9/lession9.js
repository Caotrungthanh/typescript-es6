"use strict";
var employee = {
    id: 1,
    greet: function () {
        console.log(this.id);
    },
};
console.log(employee.greet());
