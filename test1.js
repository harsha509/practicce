// conditional

// if, else , ternary operator ?:, switch, if else if, else


let changeValueRequested = 'age';

switch (changeValueRequested) {

    case "firstName":
        console.log("winter fruits are apple");
        break;
    case "lastName" :
        console.log("rainy fruits are apple");
        break;
    case "age":
        console.log("summer fruits are mango");
        console.log(10 + 20);
        break;
    case "address":
        console.log("summer fruits are mango");
        console.log(10 + 20);
        break;
    default:
        console.log("no season is matched");
}


console.log("out of switch");

// ASCII

let num1  = 100; // number
let num2 = "100"; // string

if (num1 === num2) {
    console.log('num are same')
}


 // operator null coescaling operator  ??


let  num3 = 1.00000;


let firstName = null;
let ssn = 456789;

let verification = firstName ?? ssn;
console.log(verification);


// type conversions
let data = "123";
console.log(typeof data); // string
let afterConv = Number(data);
console.log(typeof afterConv); // number



let data1 = 12345;
let afterConv1 = String(data1);
console.log(typeof afterConv1);
