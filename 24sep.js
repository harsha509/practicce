

let add = function(a, b) {
   return a+ b;
}

console.log(add(2,3)) // function all

// arrow functions
let print = () => {
    console.log("hello");
}

let add1 = (a, b) => a + b

console.log(add1(10, 20))




let details = {
    "name": "bob",
    "age": 50,
    "print": () => {
        console.log("hello ");
    }
}


details.print();
let arr = [4,5,3,5,6,7];

arr.forEach(function(element, index, arr)  {
    console.log(element + " -  " + index + "  - " + arr);
})

//map
let res = arr.map((ele) => {

    if(ele % 2 === 0){
        return ele
    } else {
        return 0
    }
})
console.log(res)
console.log(arr)






let names = ['sai', 'sri', 'hrushi', 'sagar'];


let res1 = names.map(ele => {
    return ele.toUpperCase()
})


console.log(res1)

let num = [45, 21, 6, -55, 103, 100]



console.log(num.sort())


function logic(a, b) {
    // return a - b // ascending
    return b - a // descending
}

console.log(num.sort(logic))