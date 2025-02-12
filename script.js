const tasks = document.getElementById("tasks");
const taskinput = document.getElementById("taskinput");

function addTask (){
if(taskinput.value === ""){
    alert("Please write you task.");
} else {
    const li = document.createElement("li");
    const span =  document.createElement("span");

    li.innerHTML= taskinput.value ;
    span.innerHTML='x';

    li.addEventListener("click", () => {
            li.classList.add("remove-list");

        });

    span.addEventListener("click", () => {
        tasks.removeChild(li);
    })

    tasks.appendChild(li);
    li.appendChild(span);
    taskinput.value="";
}
}
