let  tasks = [];

function addTask (){
    const taskName = document.getElementById("taskName").value;
    const category = document.getElementById("category").value;
    const deadline = document.getElementById("deadline").value;
    const status = document.getElementById("status").value;
    
    if (!taskName || !category ||!deadline) {
        alert ("please fill all fields");
        return;
    }

    const task = {taskName, 
        category, 
        deadline, 
        status};

    tasks.push(task);
    //saveTasks();
   displayTasks();
  


   let dropdown
    
}

function displayTasks(){
    const list = document.getElementById("taskList");

    tasks.forEach(task => {
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

        statuses.forEach(status =>{
            let option = document.createElement("option");
            option.value = status;
            status.innerHTML = task.status;

            // if(task.status == status){
            //     option.selected = true;
            // }
            
            //status.append(option);

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

}

// function saveTasks (){

//     list =document.getElementById("li");
//     tasks.forEach(task => {
       
//     });
// }