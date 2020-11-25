//>node currying.js
//CURRYING - Using bind
let multiply = function (x, y) {
    console.log(x * y);
}
let multiplyByTwo = multiply.bind(this, 2); //We pre setted 2 as x and while triggering a actual operation
multiplyByTwo(30);//60

let multiplyBtThree = multiply.bind(this, 3);
multiplyBtThree(100);//300

//CURRYING - using closures
let addition = function (x) {
    return function (y) { // This method is returned. But for caller x will still be accessible as x comes due to closure
        console.log(x + y);
    }
}
let addBy100 = addition(100);
addBy100(100);//200