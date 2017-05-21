
// spreads  allows you to take an array and spread it out into its individual items

console.log([1,2,3,4]) // it will log [1,2,3,4]

console.log(...[1,2,3,4]) // with spread operator (...) it will log 1 2 3 4


let first = [1,2,3,4];
let second = [5,6,7,8];

first.push(second);

console.log(first); // it will log [1,2,3,4,[5,6,7,8]]// 

//===================

let first = [1,2,3,4];
let second = [5,6,7,8];

first.push(...second); 
console.log(first); // it will log [1,2,3,4,5,6,7,8]// 


let first = [1,2,3,4];
function add(a,b,c,d) {
    console.log(a+b+c+d);
}
add(...first);