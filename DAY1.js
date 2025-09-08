// Default parameters in JavaScript

function sum(a=1, b=3) {
    return a + b;
}

let result = sum();
console.log("The sum is: " + result);

//Arrow functions in JavaScript

let exampleArrow = (name,age='0') => {
    console.log(`I am controled by ${name}`);
    console.log(`and he is ${age} years old`);
};

exampleArrow("Maurice",30)
// function inside set interval

const interval1 = setInterval(function helloThere(){
    console.log("Hello after 2 sec");
    clearInterval(interval1);
},2000)

//Change it into arrow function

const interval2 = setInterval(hellArrow = () => {
    console.log('Hello everyone in arrow after 3 sec')
    clearInterval(interval2);
},3000)







