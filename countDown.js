console.log('here for checkup');
document.getElementById('number1').addEventListener("click",function(event){
    event.preventDefault();
    let myValue = document.getElementById('number1').value;
    console.log(myValue);
    addNumber(myValue);

});

function addNumber(a){
    document.getElementById('hrs').innerHTML = a;
}