import React from "react";

export default function TodoItem() {
  return (
    <div className="todo-items-container w-full mt-5">
      <div className="todo-item flex justify-evenly items-center px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <input type="checkbox" className="accent-black" checked></input>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
          adipisci!
        </p>
        <button className="text-white linear rounded-md bg-black px-4 py-2 text-center font-medium transition duration-200 hover:!bg-slate-800">
          Update
        </button>
        <button className="text-white linear rounded-md bg-black px-4 py-2 text-center font-medium transition duration-200 hover:!bg-slate-800">
          Edit
        </button>
        <button className="text-white linear rounded-md bg-black px-4 py-2 text-center font-medium transition duration-200 hover:!bg-slate-800">
          Delete
        </button>
      </div>
    </div>
  );
}
