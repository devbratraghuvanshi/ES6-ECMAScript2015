//map is simple key value map
// bject and map are very similar to each other
// before map object were use to keep tarack of diffrent key value pair
// map offer few things that object dont

// by defaut object has a prototype so they alrady have same key with them even if user has not added any
// in object a key has to be string but in map it can be anything

//API
/*
SET()
GET()
SIZE()
CLEAR()
HAS()
*/

var myMap = new Map();

myMap.set("foo","bar");
myMap.set("hello","world");
console.log(myMap) // it will log Map { 'foo' => 'bar', 'hello' => 'bar' }

console.log(myMap.get("foo")) // bar 
console.log(myMap.get("hello")) // world 
console.log(myMap.get("anything")) // undefined 
console.log(myMap.size) // 2 because we have 2 keys 

myMap.clear(); // it will remove all the keys
console.log(myMap.size) // 0 because we have cleared all keys 

//===================================
//Map gives us several iterators 
//Keys()
//values()
//entries()

var myMap = new Map();
myMap.set("foo","bar");
myMap.set("hello","world");

for (var key of myMap.keys()) {
console.log(key) 
}

for (var val of myMap.values()) {
console.log(val) 
}

for (var [key,val] of myMap.entries()) {
console.log(key,val) 
}

//=====================Weak Map==================
// no refrence is held to keys of map
// so we cant iterat over them
// we cant use string as a key in week map

//var myMap = new Map();
var myMap = new WeakMap();
var obj = {};
var fun = function(){}
myMap.set(obj,"bar");
myMap.set(fun,"world");
//myMap.set("mapkey","mapvalue"); // for week map => Invalid value used as weak map key

for (var [key,val] of myMap.entries()) {
console.log(key,val) 
}