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

    const task = {taskName, category, deadline, status};
    tasks.push(task);
    console.dir(tasks);
}

function displayTask(){

    const taskList = getElementById(taskList);
    taskList.innerHTML = "";

    tasks.forEach((task,index) => {

        console.log(tasks.taskName);

    //     let overdue = checkOverdue(task);
    //     let statusText = overdue ? "Overdue" :task.status;

    //     taskList.innerHTML +=
    //     <tr>
    //         <td>${task.taskName}</td>
    //         <td>${task.category}</td>
    //         <td>${task.deadline}</td>
    //         <td class name {
    //             constructor(parameters) {
                    
    //             }
    //         } {
    //             constructor(parameters) {
                    
    //             }
    //         }></td>
            
    //     </tr>
    });



}