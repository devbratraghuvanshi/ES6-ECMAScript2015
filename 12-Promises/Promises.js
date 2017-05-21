
var _P = new Promise((resolve, reject) =>{

if (false) {
    resolve("Promise has been resoved");
}else{
    reject("Promise has been rejected");
}

});

_P.then( (data) => { console.log(data) } );

_P.catch((error) => { console.log(error) });

//===================================================

var _P = new Promise((resolve, reject) =>{

setTimeout(() =>{

if (true) {
    resolve("Promise has been resoved");
}else{
    reject("Promise has been rejected");
}
},2000)

});

// _P.then( (data) => { console.log(data) } );
// _P.catch((error) => { console.log(error) });

//_P.then( (data) => { console.log(data) },(error) => { console.log(error) }); //without catch pass error as 2nd parameter

//  _P.then( (data) => { console.log(data) } ).catch((error) => { console.log(error) });

_P.then( (data) => { console.log(data); return "this string1 as data for next then" } )
.then( (data) => { console.log(data);return "this string2 as data for next then" } )
.then( (data) => { console.log(data) } )
.catch((error) => { console.log(error) });

//===========
//when ever an exception is thrown in  catch is called no matter where that exception occur

var _P = new Promise((resolve, reject) =>{
// throw new Error("error occur catch will be called"); // if error then catch will be called promose will bw rejected
setTimeout(() =>{

if (true) {
    resolve("Promise has been resoved");
}else{
    reject("Promise has been rejected");
}
},2000)

});
_P.then( (data) => { console.log(data);
     return "this string1 as data for next then" 
    } )
.then( (data) => { console.log(data);
    throw new Error("error occur catch will be called");//if Error then catch will be called not the next then
    return "this string2 as data for next then" 
} )
.then( (data) => { console.log(data) } )
.catch((error) => { console.log("error:"+error) });