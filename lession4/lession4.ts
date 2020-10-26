// function myPerson(name: string) {
//     let greet;
//     if(name === "Paulo Dybala") {
//         greet = 'Helo ' + name;
//     }
//     else {
//         greet = 'Hello strager';
//     }
//     console.log(greet);
// }
// myPerson("Paulo Dybala");

var a = 1;
let b = 2;

if(a === 1) {
    var a = 10;
    let b = 20;
}
console.log(a);
console.log(b);