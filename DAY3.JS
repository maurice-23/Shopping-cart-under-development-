
//This is day 3 in js 30 program
//map function return new array 

let firstArray = [1,2,3,4];
let arraySquare = firstArray.map((num) => {
    return Math.pow(num,2);
});

console.log(arraySquare);

// Filter function // ex filter Even num

let filteredArr = firstArray.filter((a) => {
    return a % 2 == 0;
})
console.log(filteredArr);

let someArr = firstArray.some((b) => {
    return b > 0;
})

console.log(someArr);
