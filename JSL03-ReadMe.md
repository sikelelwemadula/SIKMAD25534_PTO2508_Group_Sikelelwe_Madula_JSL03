# JSL03 Console Task Manager

This repository contains the **JSL03 project** — a simple console-based task management app.
Users can add up to three new tasks to an existing list by responding to prompt dialogs. All tasks are stored as objects in an array and can be filtered to show only those with the status `"done"`.

## Technologies
◆ Html
◆ CSS
◆ JavaScript

## Features

- Pre‑populated task list with three sample items.
- Add exactly three new tasks using a `while` loop and `prompt` dialogs.
- Each new task receives a unique incremental ID based on the last item in the array.
- Task object properties: `id`, `title`, `description`, and `status`.
- User input is normalized to lowercase and validated to match one of: `todo`, `doing`, or `done`.
- Alerts the user when the three‑task limit is reached: _"There are enough tasks on your board, please check them in the console."_
- Logs all tasks to the console under the label `All tasks:` and completed tasks under `Completed tasks:`.

## Usage

1. Open `index.html` in a browser that supports `prompt` and `alert` (most desktop browsers).
2. The script will immediately request task details three times.
3. Provide a title, description, and status for each task.
4. After entering three tasks, open the developer console to inspect the logged arrays.

The console is supposed to look similar to this explainer image we got from the project brief once you are done - ![alt text](<explainer-images/console log.png>)

## Development

All logic lives in `scripts.js`. Key areas include:

- `initialTasks` array – the starting point with three hard‑coded tasks.
- `addTasks` construction – uses a `while` loop to gather three additional tasks by prompting the user.
- Status normalization and validation to avoid runtime errors.
- Filtering logic to separate completed tasks.

### Code style

- Meaningful variable names and comments for clarity.
- Simple flow control with loops and conditional alerts.
- No external dependencies – vanilla JavaScript only.

## Educational goals

- Practice working with arrays of objects and basic array methods (`push`, `filter`).
- Learn how to interact with users through `prompt` and `alert`.
- Learn how to alter previous code to make it more advanced depending on the requirement.
- Reinforce `while` loops and counter variables. 

## Contributions
Please note, this is a CodeSpace project. If you are viewing this file you do not have permission to make any changes. This is strictly an education aid.