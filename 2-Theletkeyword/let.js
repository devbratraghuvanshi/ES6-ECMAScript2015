
//1:- understanding the scope
//======================================
var message = "hi";
{
    var message = "bye"
}
console.log(message);
// it will log "bye"


// 2:- under function scope
//======================================

var message = "hi";
function greet(){
    var message = "bye"; // scope of this message var is limited to greet function
}
console.log(message); // it will log "hi"


// The let key words allow us to use block scoping // "use strict"
//==================================================
"use strict"
let message = "hi";
{
    let message = "bye";
}
console.log(message);
// it will log "bye"
//=====================================

var fs =[];
for (var i = 0; i < 10; i++) {
    fs.push(function () {
        console.log(i);
    })    
}

fs.forEach(function(fun) {
    fun();
});

//using closer
//===========================================
var fs =[];
for (var i = 0; i < 10; i++) {
    push(fs,i);    
}

function push(arr, val) {
        arr.push(function () {
        console.log(val);
    })   
}

fs.forEach(function(fun) {
    fun();
});

// using let keyword
//=============================================
"use strict"
var fs =[];
for (let i = 0; i < 10; i++) {
    fs.push(function () {
        console.log(i);
    })    
}

fs.forEach(function(fun) {
    fun();
});

