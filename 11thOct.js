

// access modifiers
// public, private, protecteed

// TODO: i need to cehck this class once code is done
class Test {
    name;

    constructor(name){
    this.name = name;
    }

    #hello() {
        console.log("hello "+ this.name)
    }

    greet(flag) {
        if(flag === "men") {
            this.#hello();
        }

    }
}

let testObj = new Test("bob");
testObj.greet("men");


//---------------

//exception handling



try {
    let a = 10;
    let b = 20;
    let c = a+ b;
    console.log(c+'----------------')
test()
    console.log("hello world");
} catch (error) {
    console.log("11thoct: try catch data "+ error)
}


//-------------------------------


let data = {
    name: "bob",
    age: 78,
    address: "fdghjkl"
}

console.log(Object.keys(data))
console.log(Object.values(data))

Object.keys(data).forEach(key => {
    console.log(key);
})

Object.values(data).forEach(value => {
    console.log(value)
})



///

console.log(JSON.toString(data))


//--------------------------


// set , map

let s = new Set();

s.add("bob");
s.add("h");
s.add("b");
s.add("bob");
console.log(s.has("h"))
console.log(s.delete('h'))
console.log(s)


let arr = [1,3,4,5,3,4,5,2,3,4,5];

let unique = new Set();
arr.forEach(value => {
    unique.add(value)
})


console.log(unique)




