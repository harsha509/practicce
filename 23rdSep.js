
let arr = [1,2,3];

let arr2 = [4,5,6];
let arr3  = arr.concat(arr2);
console.log(arr3);
let arr1 = [];
console.log(arr1.length)


// insert values in array
// push
arr1.push(10);// 1st index
arr1.push(20);
let res = arr1.push('a');
console.log(res)




// remove element from array
let res1 = arr1.pop();
console.log(res1)


//removes element from zeroth index
console.log(arr1);
console.log(arr1.shift());
console.log(arr1);


// insert element into zeroth indx

console.log(arr1);
let res4 = arr1.unshift(30);
console.log(arr1, res4)


console.log(arr[0].toString())


let arr5 = [5, 6, 3, 4, 7, 8, 9];
console.log(arr5.sort());


// for
// for in i
// for of va

//forEach

let res2 = 1;
arr5.forEach((val)=> {
    res2 = res2 * val
}

)

console.log(res2)


export function add(a, b) {
    return a+ b;
}


export function sub(a, b) {
    return a - b;
}


