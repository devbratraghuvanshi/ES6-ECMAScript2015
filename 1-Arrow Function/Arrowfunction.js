//Js syntax
var createGreeting = function(message, name){
    return message +" "+ name;
}
console.log(createGreeting("hello", "Devbrat"));

// ES6 syntax
var ArrowGreeting1 = (message,name) => {
    return message +" "+ name;
}
console.log(ArrowGreeting1("hello", "Devbrat"));


var ArrowGreeting2 = (message,name) =>  message +" "+ name
console.log(ArrowGreeting2("hello", "Devbrat"));


// in case of single parameter () are not required
var ArrowGreeting3 = message =>   message + " Devbrat"
console.log(ArrowGreeting3("hello"));

var squared = x => x*x;
console.log(squared(5));

// assign this to that case
//===============================================
var deliveryBody = {
    name: "Devbrat",
    handleMessage: function (message, handler){
        handler(message);
    },
    receive: function(){    
        var that = this;
        this.handleMessage("Hello ",function(message){
            console.log(message + that.name);
        })
    }
}
deliveryBody.receive();

//ES6
var deliveryBody = {
    name: "Devbrat",
    handleMessage: function (message, handler){
        handler(message);
    },
    receive: function(){    

        this.handleMessage("Hello ",(message) => {
            console.log(message + this.name);
        })
        // or we can use 
        //this.handleMessage("Hello ", message =>  console.log(message + this.name) )
    }
}
deliveryBody.receive();