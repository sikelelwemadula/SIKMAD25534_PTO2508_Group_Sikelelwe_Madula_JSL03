//Inintial starter code with 3 tasks
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
    status: (() => {
      let s;
      while (true) {
        s = prompt("Enter task status (todo, doing, done):");
        if (s && ['todo', 'doing', 'done'].includes(s.toLowerCase())) {
          return s.toLowerCase();
        }
        alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
      }
    })(),
  },
  {
    id: 5,
    title: prompt("enter the title of the task"),
    description: prompt("enter the description of the task"),
    status: (() => {
      let s;
      while (true) {
        s = prompt("Enter task status (todo, doing, done):");
        if (s && ['todo', 'doing', 'done'].includes(s.toLowerCase())) {
          return s.toLowerCase();
        }
        alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
      }
    })(),
  },
  {
    id: 6,
    title: prompt("enter the title of the task"),
    description: prompt("enter the description of the task"),
    status: (() => {
      let s;
      while (true) {
        s = prompt("Enter task status (todo, doing, done):");
        if (s && ['todo', 'doing', 'done'].includes(s.toLowerCase())) {
          return s.toLowerCase();
        }
        alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
      }
    })(),
  },
];
 

//Shortening the array
while (initialTasks.length > 3) {
  initialTasks.pop();
}


// Merge addTasks into initialTasks
initialTasks.push(...addTasks);


//Completed Tasks
const completedTasks = initialTasks.filter(task => task.status === 'done');
if (initialTasks.length >= 3) {
    alert("There are enough tasks on your board, please check them in the console.");
}


// Log the tasks to the console
console.log('All tasks:', initialTasks);
console.log('Completed tasks:', completedTasks);

