
// Array.from() lets you convert an "iterable" object (AKA an array-like object) to an array. 
// In this lesson, we go over grabbing DOM nodes and turing them into an array 
// so that we can use methods like Array.filter() and Array.forEach() on them

const PRODUCTS = document.querySelectorAll(".product")
console.log(PRODUCTS); 
//go to browser console and see the type of logged array it's __proto__:NodeList

// this is array like Item but not array
// so we cant do perform methods of array on this 

const _PRODUCTS = Array.from(document.querySelectorAll(".product"));
console.log(_PRODUCTS); 

//go to browser console and see the type of logged array it's __proto__:Array

_PRODUCTS.filter(product => parseFloat(product.innerHTML) <= 20)
.forEach(product => product.style.color ='red');