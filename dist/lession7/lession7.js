"use strict";
var isDone = false;
console.log(isDone);
var decimal = 6;
console.log(decimal);
var animal = 'Dog';
console.log(animal);
var description = "This is my " + animal + ". It's " + (decimal + 2) + " year old";
console.log(description);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var getColor = Color.Green;
console.log(getColor);
