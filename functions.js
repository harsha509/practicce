// function and method are different

// declaring a function
function add() {
    console.log("adding data");
}

function add1(a, b) {
    return a + b;
}

// how to call a function

add();
add1(2, 3);
let result = add1(10, 20);


function login(id, pass) {
    document.getElementById(id).enterUsername (id);
    document.getElementById(id).enterPasword (pass);
    login.click();
}


// function expression
let signUp = function(email) {
    console.log("this code is for signup with email "+ email)
}


signUp("xyz@xyz.com");


// execute a function by itself
// self executable or IIFE (Immediately invoked function expressions)
(function sub(x, y) {
    return x - y;
})(20, 10);



//callbacks in js


function print(res) {
    console.log("i am done with work, result is "+ res);
}

function doMath(a, b, callback) {
    let c = a + b;
    print(c);
}


doMath(10, 20, print);


let personalDetails = {
    "name": "harsha",
    "age": 32,
    "printDetails": function() {
        console.log("name "+ this.name + "age "+ this.age);
    },
    "phNum": 3456789
};

console.log(personalDetails.name);
personalDetails.printDetails();


let name = " hrushi ";
console.log(name.length);













