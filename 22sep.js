let name  = "shiva Kumar";

console.log(name.split(" "));
let name1 = "     h  S   "
console.log(name1.trim()) // string but removes spaces from first and last

let word = "this is an example";
console.log(word.includes("an")) // boolean

if(name.toUpperCase().includes("KUMAR")) {
    console.log("Found it")
}


let firstName = "john";
let lastName = "doe";

let res1 = firstName+" "+ lastName;
console.log(res1);

let res2 = firstName.concat(" ", lastName);
console.log(res2);



// array ,
let arr = ["test", "one", "two", "three"];
console.log();
let res3 = arr.join(" ")
let res4 = res3.concat(" ", "test");
console.log(res4);


console.log(arr.reverse());


//I =0 //
// ar.4
for (let i=0; i < arr.length; i++) {
    console.log(arr[i]);
}

// for in =  index
for( let i in arr ) {
    console.log(i);
}


// for of =  values
for( let i of arr ) {
    console.log(i);
}



for (let i=name.length; i>=0; i-- ) {
    console.log(name[i])
}





console.log(arr.length)
console.log(name.length)

