import React from "react";

export default function ShowInput() {
  return (
    <div className="p-2">
      <div className="relative mt-2 rounded-md shadow-sm">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Title
          </label>
          <input
            type="text"
            name="todo"
            id="todo"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Enter Todo"
          />
        </div>
        {/* <div className=" mt-5">
          <label
            htmlFor="Description"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Description
          </label>

          <textarea
            placeholder="Write Description"
            className="block w-full  mt-2 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          ></textarea>
        </div> */}
        <div className="mt-5">
          <button className=" w-full text-white linear rounded-md bg-black px-4 py-2 text-center font-medium transition duration-200 hover:!bg-slate-800">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
