import { useRef, useState } from "react";

const Stats = () => {
  const titleRef = useRef(null);

  const [tasks, setTasks] = useState([]);

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

  const handleDeleteALL = () => {
    const newTasks = [...tasks];
    newTasks.length = 0;
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
        {tasks.length !== 0 ? (
          <button className="ml-3" onClick={handleDeleteALL}>
            X(all)
          </button>
        ) : null}
      </div>{" "}
      :
      {tasks.length === 0 ? (
        <div className="text-white">Empty List</div>
      ) : (
        <div className="text-white">
          {tasks.map((task, index) => {
            return (
              <li
                className={`m-2 ${task.completed ? "line-through" : "m-2"}`}
                key={index}
              >
                {task.title}
                <button
                  className="ml-4 bg-white text-black rounded-lg p-1"
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
                  {task.completed ? "U" : "M"}
                </button>
              </li>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Stats;
