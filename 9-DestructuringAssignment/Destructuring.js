
{
    color: "black" // say you wana log ths prop
}

var obj = {
    color: "black"
}
console.log(obj.color);

//ES6

var {color} =  { // find the color property in this object
    color: "black"
}
console.log(color);

var {color,name} =  { // also works with multiple prop
     name : "Royal Enfield",
    color : "black",
    model : "Classic-350"
}
console.log(color);
console.log(name);

//==================================================================
 function getObject() {
     return {
              name : "Royal Enfield",
             color : "black",
             model : "Classic-350"
     }
 }
 var {color,name} =getObject();
 console.log(color);
 console.log(name);

 var {color:cProp,name:nProp} =getObject();// assign color prop to cProp and name to nProp 
  console.log(cProp);
  console.log(nProp);

 //========================================================
// destructuring declaration with array
["red", "green", "blue","blue", "black"] //suppose you want 1st and 5th item of array

var [first,,,,fifth] = ["red", "green", "blue","blue", "black"] 
console.log(first)
console.log(fifth)

//=====================
var people = [{
  "id": 1,
  "first_name": "Rutledge",
  "last_name": "Hayesman",
  "email": "rhayesman0@histats.com",
  "gender": "Male",
  "ip_address": "178.25.113.75"
}, {
  "id": 2,
  "first_name": "Standford",
  "last_name": "Ponnsett",
  "email": "sponnsett1@de.vu",
  "gender": "Male",
  "ip_address": "27.180.136.63"
}, {
  "id": 3,
  "first_name": "Misty",
  "last_name": "Kyrkeman",
  "email": "mkyrkeman2@msu.edu",
  "gender": "Female",
  "ip_address": "92.108.118.128"
}, {
  "id": 4,
  "first_name": "Yuri",
  "last_name": "Romanski",
  "email": "yromanski3@1und1.de",
  "gender": "Male",
  "ip_address": "130.190.224.118"
}, {
  "id": 5,
  "first_name": "Joscelin",
  "last_name": "Rossbrooke",
  "email": "jrossbrooke4@nytimes.com",
  "gender": "Female",
  "ip_address": "56.161.164.25"
}]

 people.forEach(({first_name})=> {console.log(first_name)})

var [,,,,Joscelin] = people;
function logEmail({email}) {
    console.log(email)
}
logEmail(Joscelin);
