let taskArray = [];
document.getElementById('form').addEventListener("submit", function(event){
    event.preventDefault();
 
    let taskValue = document.getElementById("taskContent").value;
    taskArray[taskArray.length] = taskValue;
    console.log(taskArray.length);
    console.log(taskArray)
    renderTask();
});

function renderTask(){
    document.getElementById("display").innerHTML = '';
    for (let i = 0; i < taskArray.length; i++) {
        let taskContent =  document.getElementById("display");
        taskContent.innerHTML += `<li'>${taskArray[i]} <a href='#' onclick='deleteItem(${i})'>Delete</a></li> <br>`;

    }

}
function deleteItem(i){
    taskArray.splice(i,1);
    renderTask();
}





