let form = document.getElementById("form");

form.addEventListener("submit", function(event){
    event.preventDefault();
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    let finalResult;
    const operator = document.getElementById('operator').value;

    switch (operator) {
        case "times":
            finalResult = num1 * num2;
            break;
        case "plus":
            finalResult = Number(num1) + Number(num2);
            break;
        case "minus":
            finalResult = Number(num1) - Number(num2);
            break;
        case "divide":
            finalResult = Number(num1) / Number(num2);
            break;

        default:
            finalResult = "Something went wrong pleas try again!";
            break;
    }

    document.getElementById('resultSpace').innerHTML = `${num1} ${operator} ${num2} = ${finalResult}`;

})