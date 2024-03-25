import { useState } from "react";

function ToDoList() {
  //empty array of tasks for now, will add tasks:
  const [tasks, setTasks] = useState([
    "Eat Breakfast",
    "Take a shower",
    "Walk the dog",
  ]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function AddTask(event) {
    //only add task if newTask is NOT empty
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      //clear the input element:
      setNewTask("");
    }
  }

  function DeleteTask(index) {
    //if the currnet index (i) not equal to index we're deleting, put it inside the new updatedTasks array
    const updatedTasks = tasks.filter((_, i) => i !== index);
    //set our new tasks with our updatedTasks (array with the 1 missing element we filtered out)
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
        const updatedTasks = [...tasks];
        //array destructuring to swap two elements in an array:
        [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]]
        //set our tasks with our updatedTasks (array with swapped elements):
        setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      //array destructuring to swap two elements in an array:
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      //set our tasks with our updatedTasks (array with swapped elements):
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={AddTask}>
          Add
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => DeleteTask(index)}>
              Delete
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              👆
            </button>
            <button className="move-button" onClick={() => moveTaskDown(index)}>
              👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
