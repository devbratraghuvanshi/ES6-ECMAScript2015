
var message ="Hello";
var greet = message + " world !";

console.log(greet);

//ES6 allows you to put the variables inside string

var message ="Hello";
var greet = `${message}  world !`; //use var inside ${}
console.log(greet);

// it even respects wide space across multiple line

var message ="Hello";
var greet = `${message} 

 world !`; //line brake will also be logged
console.log(greet);

// you can do expression evaluatin inside this as well
var x = 1;
var y = 2;
var equation =`${x} + ${y} = ${ x + y }`;
console.log(equation);

// 
var message = `it's ${new Date().getHours()} and I am sleeping`;
console.log(message);

// parseing the template via function

function parse(strings, ...values) {
    console.log(strings);
    console.log(values);

    if (values[0] > 20) {
        strings[1] = "and I am awake";
    }
    return `${strings[0]} ${values[0]} ${strings[1]} ${values[1]} ${strings[2]}`
}
var message = parse`it's ${new Date().getHours()}:${new Date().getMinutes()} and I am sleeping`; // function name with string temp
console.log(message);




