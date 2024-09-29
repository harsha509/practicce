let arr = [20, 40, 24, 88, 2, 73];
                //    0  1   2   3   4  5


// some
// every
// boolean  = true or false



let res = arr.some((ele)=> {
    return ele > 50
})


console.log(res);

let res1 = arr.every((ele)=> {
    return ele%2 === 0;
});

console.log(res1)


let arr1 = [[[1,2]], [[[[[3,4]]]]], [5,6]];


let arr2 = arr1.flat(100);
console.log(arr2);


let arr3  = arr.slice(1,4)
console.log(arr3)





let a = [1,2,3];
let b = [...a];
b.push(20);


console.log(b)
console.log(a)


function add(a,b,c, d) {
    return a + b + c + d
}



console.log(add(...a));

let a1 =10;
let b1 =20;
//
// let c = b;
// b= a;
// a= c;


// array destructuring
[a1, b1] = [b1, a1]


console.log(a1)
console.log(b1)
