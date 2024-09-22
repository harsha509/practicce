//declaration

let details = {
    "name": "harsha",
    "age": 32,
    "address": "",
    "_firstName": "",
    "last_name": "",
    "10": "ten",
    "moreDetails" : {
        "parentName": "xyz"
    }
};

console.log(details["moreDetails"]["parentName"])
//two ways to access the data in objects

// 1. dot notation
// 2 computed member access

console.log(details.address ?? details.age)


let name = "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwa";
//  h a r s h a
//  0 1 2 3 4 5

// charAt(index)

console.log(name.charAt(name.length));


let age = 10;

console.log(typeof age.toString());


let val = true;
console.log(val.valueOf())
