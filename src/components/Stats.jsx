import { useState } from "react";
import { linkedin, music } from "../assets";

const Stats = () => {
  const taskDate = [
    {
      title: "first",
      description: "...",
      completed: false,
    },
    {
      title: "second",
      description: "...",
      completed: false,
    },
    {
      title: "third",
      description: "...",
      completed: false,
    },
  ];
  const [tasks, setTasks] = useState(taskDate);

  const handleDelete = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };
  const [newOne, setNewOne] = useState("");

  const handleAdd = () => {
    const newTasks = [...tasks];
    newTasks.push({ title: `${newOne}`, description: "...", completed: false });
    setTasks(newTasks);
  };
  const handleMade = (index) => {
    const newTasks = [...tasks];
    {
      newTasks[index].completed === false
        ? (newTasks[index].completed = true)
        : (newTasks[index].completed = false);
    }
    setTasks(newTasks);
  };
  return (
    <>
      <div className="text-white">
        <input
          className="text-black"
          type="text"
          value={newOne}
          onChange={(e) => setNewOne(e.target.value)}
        />
        <button onClick={newOne !== "" ? handleAdd : null}>ADD</button>
      </div>

      <div className="text-white">
        {tasks.map((task, index) => {
          return (
              <li 
                className={task.completed ? "line-through" : 'm-2' }
                key={index}
              >
                {task.title}
                <button className="ml-4 bg-white text-black rounded-lg p-1"
                  onClick={() => {
                    handleDelete(index);
                  }}
                >
                  X
                </button>
                <button
                  className="ml-4 bg-white text-black rounded-lg p-1"
                  onClick={() => {
                    handleMade(index);
                  }}
                >
                  {task.completed ? 'U' : 'M'}
                </button>
              </li>
          );
        })}
      </div>
    </>
  );
};

export default Stats;
