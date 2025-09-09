//Arrow function and variable scope WTF 😆

let afterAll = setInterval((name) => {
    console.log("Hello "+name);
    console.log("You are too old")
    clearInterval(afterAll);
}, 3000);


// Global scope 

let elementOne = 3; //global

function hello() {
    let elementTwo = 4 //in function scope
    if(elementOne > elementTwo){
        let element3 = 'Cool'; //can't be accessed outside
    }
    
}

//That for day two
//But i am going to start quiz app to test some of my skills