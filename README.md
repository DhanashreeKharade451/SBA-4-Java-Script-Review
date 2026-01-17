How the App Works
***************************
1️⃣ Adding New Tasks

The user enters:

Task Name

Category

Deadline (date input)

Status (In Progress / Completed)

When the “Add Task” button is clicked:

A new task object is created with the above properties.

The object is added to the tasks array.

Tasks are saved to localStorage so they persist on page refresh.

The task list is displayed dynamically in the browser.

2️⃣ Displaying Tasks

Tasks are displayed as a list of items. Each task shows:

Task Name

Category

Deadline

Status dropdown

The app clears the old list each time a task is added or updated to prevent duplicates.

The status dropdown allows users to change the task’s status directly in the list.

Whenever a status changes, the array and localStorage are updated immediately.

3️⃣ Updating Task Status

The status dropdown for each task is interactive:

When changed, it updates the corresponding task in the tasks array.

Saves the updated task list to localStorage.

The app automatically checks deadlines:

If a task’s deadline has passed and its status isn’t Completed, it is marked “Overdue” automatically.

4️⃣ Filtering Tasks

Users can filter tasks by status using a dropdown:

Options: All, In Progress, Completed, Overdue

When a filter is selected:

Only tasks matching the selected status are displayed.

The original array is not modified, so switching filters back to “All” shows everything.

5️⃣ Persisting Tasks with LocalStorage

All tasks are stored in the browser’s localStorage as JSON.

On page load, tasks are retrieved and displayed automatically, so data is not lost if the page is refreshed.

Additional Features I Implemented

Automatic Overdue Detection

Tasks with deadlines before today automatically become “Overdue”.

Saves users from manually updating overdue tasks.

Status Dropdown per Task

Each task has its own interactive dropdown for status.

Updates happen instantly in the UI and in localStorage.

Input Validation

If any field is empty, an alert prompts the user to fill it.

Persistent State

Tasks remain in the app even after refreshing the page.

Clean List Rendering

The task list is cleared and re-rendered each time a task is added or filtered, preventing duplicates.

Filter by Status

Allows users to quickly view tasks by their progress.
******************************************************************************************************************************************

Answers for reflection Questions:
*******************************
Challenges faced during the project.

During this Task Management app project, one of the main challenges I faced was dynamically updating the task list while ensuring data persisted correctly. Initially, changes to task status and newly added tasks were not reflected immediately, and the list sometimes duplicated entries. Another challenge was automatically marking tasks as overdue based on the deadline while maintaining user-selected statuses.

***************************************************************************
 How you approached solving those challenges.
 
 for local storage and display function took help from my couch Quinn.
 I structured the code so that the task list is cleared and re-rendered every time a task is added, updated, or filtered. I implemented event listeners on the status dropdowns to update tasks in the array and save changes to localStorage instantly. For overdue detection, I added a date comparison before rendering each task.
 
 ********************************************************************************************
  What you would improve if given more time.
  
  If given more time, I would improve the app by adding category-based filtering, edit and delete functionality, and a more user-friendly table layout. Additionally, highlighting overdue tasks visually would enhance usability. Overall, this project strengthened my understanding of DOM manipulation, localStorage, and dynamic data handling in JavaScript.