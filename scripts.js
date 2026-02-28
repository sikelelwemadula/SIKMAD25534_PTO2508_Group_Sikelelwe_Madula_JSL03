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


//Completed Tasks
const completedTasks = initialTasks.filter(task => task.status === 'done');

console.log('All tasks:', initialTasks);
console.log('Completed tasks:', completedTasks);