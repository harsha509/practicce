// filter
// fill


let arr = [2,3,4,5,6, 7];

let res = arr.fill(0, 2)
console.log(res)


let fruits = ["Mango", "Banana", 'Peach', 'Orange', 'Apple', 'Pineapple', 'Grape'];

let newArr = fruits.filter((fruit)=> {

    return fruit.length > 5;
})


let newArr1 =  fruits.filter((fruit) => {
    // return fruit.includes("ap")
    return fruit.toLowerCase().includes("ap")
})


console.log(newArr1);

//-------------------------------------------------------------------------

class Example {

    constructor(name) {
        this.name = name;
    }

    get userName() {
        console.log(` Hello ${this.name}`);
    }
}


let obj = new Example("Bob");


obj.userName;



let obj1  = {
    userName: "Bob",
    age: 25
}

obj1.address= "9035 efsfs";


let {age, userName, address} = obj1;

console.log(userName);
console.log(age);
console.log(address);

console.log(obj1)
delete obj1.address;
console.log(obj1)


console.log(arr)
delete arr[0];
console.log(arr)


let arr3 = [4,5,6,4,5,6,4,5,6]
let res2 = arr3.lastIndexOf(4);
console.log(res2)

console.log(arr3.includes(7))
let res4 = arr3.find((ele)=> {
    return ele > 4
})

console.log(res4)






















