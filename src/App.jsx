import { useState } from "react";
import React from "react";

const App = () => {
  const [Task, setTask] = useState("");
  const [Desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { Task, Desc }]);
    setDesc("");
    setTask("");
  };
  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };

  let renderTask = <h2>No Task Available</h2>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between mb-8">
          <div className="flex items-center justify-between mb-5 w-2/3">
            <h5 className="text-xl font-semibold ">{t.Task}</h5>
            <h6 className="text-xl font-semibold">{t.Desc}</h6>
          </div>
          <button
            onClick={() =>{
              deleteHandler(i);
            }}
            className="bg-red-400 rounded text-white px-4 py-2 font-bold"
          >
            Delete
          </button>
        </li>
      );
    });
  }
  return (
    <>
      <h1 className="bg-black text-white p-5 text-2xl font-bold text-center">
        Devesh's Todo List
      </h1>
      <form  onSubmit={submitHandler}>
        <input
          type="text"
          className="border-zinc-900 border 2 m-5 px-4 py-2 text-2xl"
          placeholder="Enter Task Here!!"
          value={Task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <input
          type="text"
          className="border-zinc-900 border 2 m-5 px-4 py-2 text-2xl"
          placeholder="Enter Description Here!!"
          value={Desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <button className="bg-black text-white px-4 py-2 font-bold rounded text-2xl m-5">
          Add Task
        </button>
      </form>
      <hr />
      <div className="bg-slate-200 p-8">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default App;
