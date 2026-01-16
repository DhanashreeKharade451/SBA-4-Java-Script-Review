let  tasks = [];

function addTask (){
    const taskName = document.getElementById("taskName").value;
    const  category = document.getElementById("category").value;
    const  deadline = document.getElementById("deadline").value;
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
    saveTasks();
   displayTasks();
   alert("test");


   let dropdown
    
}

function displayTasks(){
    const list = document.getElementById("taskList");

    tasks.forEach(task => {
        let li = document.createElement("li");
        let taskName = document.createElement("p");
        let category = document.createElement("p");
        let deadline = document.createElement("p");
        
        let status = document.createElement("option");

        if (status == "In Progress"){

        }
        taskName.innerHTML = task.taskName;
        category.innerHTML = task.category;
        deadline.innerHTML = task.deadline;
        
        li.append(taskName);
        li.append(category);
        li.append(deadline);

        list.append(li);
        

    });

}

function saveTasks (){

    list =document.getElementById("li")
    tasks.forEach(task => {
        list.
    });
}