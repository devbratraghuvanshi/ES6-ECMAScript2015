

var name = "Royal Enfield"
var color = "black";
var model = "Classic-350"

var bike = {name, color, model }
console.log(bike)

//==========================================================================
var name = "Royal Enfield"
var color = "black";
var model = "Classic-350"
function topSpeed() { 
console.log("120 kmph")
}

var bike = { name, color, model, topSpeed } // function topSpeed as prop

bike.topSpeed();

//============================================
var name = "Royal Enfield"
var color = "black";
var model = "Classic-350"

var bike = { 
    name, 
    color,
    model, 
topSpeed() { console.log("120 kmph") } // ES5 way  topSpeed : function() { console.log("120 kmph") }
} 
bike.topSpeed(); // still 120 kmph

// Computed property==================================
var name = "Royal Enfield"
var color = "black";
var model = "Classic-350"

var bike = { 
    name, 
    color,
    model, 
["topSpeed"]() {  // Computed property ["topSpeed"]
console.log("120 kmph")
}
} 
bike.topSpeed(); // still 120 kmph

// Computed property ==================================
var name = "Royal Enfield"
var color = "black";
var model = "Classic-350"
var speed = "topSpeed";

var bike = { 
    name, 
    color,
    model, 
[speed]() {  console.log("120 kmph") } // Computed property ["topSpeed"] as speed
} 
bike.topSpeed(); // still 120 kmph