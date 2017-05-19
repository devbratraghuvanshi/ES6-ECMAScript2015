
//as a best Practice cont variables should be All Upper case

var VALUE ="1st value";
value = "2nd value"; //value and VALUE both are same
console.log(value)
console.log(VALUE)

//ES5 CONST


const VALUE ="1st value";
VALUE = "2nd value"; // it will give TypeError: Assignment to constant variable.
console.log(VALUE)

// CONST is not a constant value but a Constant refrance

const VALUE = {}; //const is obj
VALUE.name = "Devbrat";
console.log(VALUE);

VALUE.name = "Raghuvanshi"; // see we can assign the property of obj even if it is Conat
console.log(VALUE);

VALUE = {name: "Devbrat"}; // this will give TypeError: Assignment to constant variable.
console.log(VALUE);

// use
const _PORT = 8080;
const PI = 3.14;

//like let, const is also block scope

if (true) {
    const _CONST = "bar";
}
console.log(_CONST) //ReferenceError: _CONST is not defined

if (true) {
    const _CONST = "bar";
    console.log(_CONST) // it will log "bar"
}

const _CONST = "foo";
if (true) {
    const _CONST = "bar";
}
console.log(_CONST) // it will log "foo"