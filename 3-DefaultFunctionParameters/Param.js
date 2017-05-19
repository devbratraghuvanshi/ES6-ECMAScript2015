

function greet(message, name) {
    console.log(message +", "+name);
}
greet(); 
//this will log undefined, undefined

"use strict"
function greet(message, name ='Devbrat') 
{ 
    console.log(message +", "+ name);
} 
greet(); //this will log undefined, undefined

greet('hello', 'Dev'); 

//==============================================

function exeFunction(fun){
    fun();
}
//exeFunction(); // output will be TypeError: fun is not a function
exeFunction(function(){
    console.log("log complete");
});

//or
function exeFunction(fun = function(){
    console.log("log from default function")
}){
    fun();
}
exeFunction();
//======
function exeFunction(fun = () =>console.log("log from default function")){
    fun();
}
exeFunction();

//======
let exeFunction = ( fun = ()=> console.log("log from default function") ) => fun()
exeFunction();
exeFunction( () => console.log("log from parameter function") );
