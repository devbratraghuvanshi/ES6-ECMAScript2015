// import {pi, sumTwo} from "./lib/math1";
// console.log("2π = " + sumTwo(pi,pi));

import {pi, sumTwo} from "./lib/math2"; // import only few
console.log("2π = " + sumTwo(pi,pi));

import {pi as pai, sumTwo as addNumber} from "./lib/math2"; //import as alias
console.log("2π = " + addNumber(pai,pai));

// import * as from "./lib/math2"; //import all 
// console.log("2π = " + sumTwo(pi,pi));

import * as math2 from "./lib/math2"; //import all as alias
console.log("2π = " + math2.sumTwo(math2.pi,math2.pi));

//==========================
import {users} from "./data/users"
console.log(users);

//npm install --save-D lodash
import * as _ from "lodash"
console.log(_.filter(users,{"gender": "Male"}));