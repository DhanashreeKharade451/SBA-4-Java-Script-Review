
let  tasks = [];

window.onload = () => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
        displayTasks();
    }
};


function addTask (){
    const taskName = document.getElementById("taskName").value;
    const category = document.getElementById("category").value;
    const deadline = document.getElementById("deadline").value;
    const status = document.getElementById("status").value;
    
    
    if (!taskName || !category ||!deadline) {
        alert ("please fill all fields");
        return;
    }

    const task = {
        taskName, 
        category, 
        deadline, 
        status
    };

    tasks.push(task);
    saveTasks();
    displayTasks();

   //clear inputs after adding task

   document.getElementById("taskName").value = "";
   document.getElementById("category").value = "";
   document.getElementById("deadline").value = "";
    
}

function displayTasks(filtered = tasks){
    const list = document.getElementById("taskList");
    list.innerHTML = ""; //clear list before adding value

    filtered.forEach((task,index) => {

        if(new Date(task.deadline) < new Date() && task.status != "Completed"){
            task.status = "Overdue";
        }
        let li = document.createElement("li");
        let taskName = document.createElement("p");
        let category = document.createElement("p");
        let deadline = document.createElement("p");
        //let dropdown = document.createElement("select");
        let status = document.createElement("select");
        
                
        taskName.innerHTML = task.taskName;
        category.innerHTML = task.category;
        deadline.innerHTML = task.deadline;
        
        
        //status
        let statuses = ["In Progress", "Completed", "Overdue"]

        statuses.forEach(s =>{
            let option = document.createElement("option");
            option.value = s;
            option.innerHTML = s;

            if(task.status == s){
                option.selected = true;
            }
            
            status.appendChild(option);

        } );
        
        status.addEventListener("change", () =>{
            tasks[index].status = status.value;
            saveTasks();
            displayTasks();
        } );
        // status.addEventListener("change",() =>{
        //     task.status = status.value;
        //     localStorage.setItem("tasks",JSON.stringify(tasks));
        // });
        li.append(taskName);
        li.append(category);
        li.append(deadline);
        li.append(status);

        list.append(li);
     
    });
    
    saveTasks();
}

function filterTasks(){

    const filterValue = document.getElementById("filter").value;

    if(filterValue == "ALL"){
        displayTasks();
    }else{

        const filtered = tasks.filter(task => task.status == filterValue);
        displayTasks(filtered);
    }
}

function saveTasks(){
    localStorage.setItem("tasks", JSON.stringify(tasks));

}
// function saveTasks (){

//     list =document.getElementById("li");
//     tasks.forEach(task => {
       
//     });
// }