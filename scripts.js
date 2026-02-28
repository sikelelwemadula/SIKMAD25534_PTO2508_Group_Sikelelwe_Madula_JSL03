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
    status: prompt("Enter task status (todo, doing, done):").toLowerCase(),
  },
  {
    id: 5,
    title: prompt("enter the title of the task"),
    description: prompt("enter the description of the task"),
    status: prompt("Enter task status (todo, doing, done):").toLowerCase(),
  },
  {
    id: 6,
    title: prompt("enter the title of the task"),
    description: prompt("enter the description of the task"),
    status: prompt("Enter task status (todo, doing, done):").toLowerCase(),
  },
]; 

// Merge addTasks into initialTasks
initialTasks.push(...addTasks);

console.log(initialTasks); // Shows all 6 tasks combined 

// Keep asking until the user enters a valid status for all the tasks
for (let i = 0; i < addTasks.length; i++) {
  let status = addTasks[i].status;
  while (status !== "todo" && status !== "doing" && status !== "done") {
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
    addTasks[i].status = prompt("Enter task status (todo, doing, done):").toLowerCase();
    status = addTasks[i].status;
  }
}