// Generators in ECMAscript 6 are first-class coroutines that produce 
// encapsulated suspended execution contexts. Whew! Yield values and iterate over them 
// until no more values exist in the generator. We'll talk more about practical use later 

function* greet() {
    console.log(`you called next()`);
}
greet();// nothing happend :(

// now lets assign this to var
var greeter = greet();
console.log(greeter); 
console.log(greeter.next); //it will log an object
console.log(greeter.throw); 

// so when we call next

 let next =greeter.next();
 console.log(next);  // it will log { value: undefined, done: true }
 // + you will also see log for "you called next()" means this function was executed this time :)
 // value is undefined because we did not yield anything and 
 //done is true because it has gone through all the yield statement that is none right now

//==================================================

function* greet() {
    console.log(`you called next()`);
    yield "hello"
}
var greeter = greet();
let next =greeter.next();
 console.log(next); // it will log { value: 'hello', done: false }

 let nextAgain =greeter.next();
 console.log(nextAgain); //{ value: undefined, done: true } 
 //value is undefined because we did not yield anything 2nd time
 //done is true because it has gone through all the yield statement

 //========================

 function* greet() {
    yield "hello"
     console.log("I will be called on 2nd yield statement");
         yield "How"
     console.log("I will be called on 3nd yield statement");
         yield "Are"
     console.log("I will be called on 4nd yield statement");
         yield "You"
     console.log("I will be called on 5nd yield statement");
}
var greeter = greet();
 console.log(greeter.next());
  console.log(greeter.next());
   console.log(greeter.next());
    console.log(greeter.next());
     console.log(greeter.next());

//=====================================
// because it is itrater we can use it in loop
function* greet() {
    yield "hello"
     console.log("I will be called on 2nd yield statement");
         yield "How"
     console.log("I will be called on 3nd yield statement");
         yield "Are"
     console.log("I will be called on 4nd yield statement");
         yield "You"
     console.log("I will be called on 5nd yield statement");
}
var greeter = greet();
for (let greeting of greeter) { // greeting is getting the value of greeter.next() // greeter.next().value
   console.log(greeting);
}

 //========================
 function* greet() {
    yield "hello"
     console.log("I will be called on 2nd yield statement");
         yield "How"
     console.log("I will be called on 3nd yield statement");
         yield "Are"
     console.log("I will be called on 4nd yield statement");
         yield "You"
     console.log("I will be called on 5nd yield statement");
}
var greeter = greet();
 console.log(greeter.next().value);
 console.log(greeter.next().value);
 console.log(greeter.next().value);
 console.log(greeter.next().value);
 console.log(greeter.next().value);

 //========================================
//Assigning things to yield statement
 function* greet() {

    let hello = yield "hello" 
     console.log(hello);            // it will log undefined 
       let How =  yield "How"  
       let Are =  yield "Are"
       let You =  yield "You"
}
var greeter = greet();
 console.log(greeter.next().value);
  console.log(greeter.next().value);


//====================

 function* greet() {

    let hello = yield "hello" 

       let How =  yield hello +" How" 

       let Are =  yield How+ " Are"

       yield  Are +" You"

}
var greeter = greet();
console.log(greeter.next().value); // 
console.log(greeter.next("assign this to hello world").value); // parameter in this will be assign to let hello variable
console.log(greeter.next("this will be how var ").value);
console.log(greeter.next( "I am done").value); 

///

function* graph() {
    let x = 0;
    let y = 0;
    while (true) {
        yield {x:x,y:y}
        x+2;
        y+1;
    }
}
console.log(graph().next());
console.log(graph().next());
console.log(graph().next());
console.log(graph().next());
console.log(graph().next());
console.log(graph().next());
console.log(graph().next()); // you can youse as many next as you want as this is in infinite loop
