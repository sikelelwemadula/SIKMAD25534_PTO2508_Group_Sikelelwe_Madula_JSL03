# Task Board Application – Step-by-Step Pseudo Code Guide

---

## STEP 1 – Keep Adding Tasks Until There Are 6

### Goal:

Continue prompting the user to add tasks until the array contains 6 total tasks.

### Pseudo Code:

* WHILE the number of items inside `initialTasks` is less than 6

  * Call the `addTask()` function
* The loop should stop automatically once the length becomes 6

### Key Concepts:

* `.length` gives the number of items in an array
* A `while` loop runs as long as its condition is true
* When the condition becomes false, the loop stops automatically

---

## STEP 2 – Alert the User When the Board Is Full

### Goal:

Notify the user once there are exactly 6 tasks.

### Pseudo Code:

* IF the number of tasks in `initialTasks` equals 6

  * Show an alert message telling the user there are enough tasks

### Key Concepts:

* `if` statements run only when a condition is true
* The loop guarantees we stop at 6, but the `if` confirms it

---

## STEP 3 – Create the addTask Function

### Goal:

Create a function that collects user input, validates it, creates a task object, and adds it to the array.

### Pseudo Code Structure:

* Create a function called `addTask`

Inside the function:

1. Ask the user for:

   * Task title
   * Task description
   * Task status

2. Convert the task status to lowercase

   * This ensures values like "DONE" or "Done" still work

3. Validate the status

   * WHILE the status is NOT equal to:

     * "todo"
     * "doing"
     * "done"
   * Show an alert explaining valid options
   * Ask for the status again

4. Create a new task object

   * id → current array length + 1
   * title → user input
   * description → user input
   * status → validated status

5. Add the new task to `initialTasks`

   * Use the `.push()` method

### Key Concepts:

* Functions group reusable logic
* Input validation loops prevent incorrect data
* Objects store structured data
* `.push()` adds items to an array

---

## STEP 4 – Create getCompletedTasks Function

... (44 lines left)

//(for (let i = 0; i < addTasks.length; i++) {
  let status = addTasks[i].status;
  while (status !== "todo" && status !== "doing" && status !== "done") {
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
    addTasks[i].status = prompt("Enter task status (todo, doing, done):").toLowerCase(),
    status = addTasks[i].status;
  }
})

(// Keep asking until the user enters a valid status for all the tasks
// 1. Loop exactly 3 times
for (let i = 0; i < 3; i++) {
  // 2. Ask for the initial status
  let input = prompt(`Enter status for task ${i + 1} (todo, doing, done):`).toLowerCase();

  // 3. Keep asking if the input is invalid
  while (input !== "todo" && input !== "doing" && input !== "done") {
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
    input = prompt("Enter task status (todo, doing, done):").toLowerCase();
  }

  // 4. Once valid, add it to the array as an object
  addTasks.push({ status: input });
}

console.log(addTasks); // Array now contains 3 task objects)

(initialTasks.forEach((task) => {
  if (task.status === "done") {
    console.log(`Task "${task.title}" is done!`);
  }
});) 




const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Contribute to Open Source Projects",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
];

//The addition of 3 more tasks to the initialTasks array
const addTasks = [
  {
    id: 4,
    title: prompt("enter the title of the task"),
    description: prompt("enter the description of the task"),
    // store result first in case user cancels (null) so we don't call toLowerCase on null
    status: (() => {
      const s = prompt("Enter task status (todo, doing, done):");
      return s ? s.toLowerCase() : "";
    })(),
  },
  {
    id: 5,
    title: prompt("enter the title of the task"),
    description: prompt("enter the description of the task"),
    status: (() => {
      const s = prompt("Enter task status (todo, doing, done):");
      return s ? s.toLowerCase() : "";
    })(),
  },
  {
    id: 6,
    title: prompt("enter the title of the task"),
    description: prompt("enter the description of the task"),
    status: (() => {
      const s = prompt("Enter task status (todo, doing, done):");
      return s ? s.toLowerCase() : "";
    })(),
  },
]; 

// Merge addTasks into initialTasks
initialTasks.push(...addTasks);

// Check if the tasks have been done and log it if so

 


//Completed Tasks
const completedTasks = initialTasks.filter(task => task.status === 'done');

console.log('All tasks:', initialTasks);
console.log('Completed tasks:', completedTasks);