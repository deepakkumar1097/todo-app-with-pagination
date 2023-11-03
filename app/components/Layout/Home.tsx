import React, { useState } from "react";
import ShowInput from "./ShowInput";
import ExpandCollapse from "./ExpandCollpase";

export default function Home() {
  const [show, setShow] = useState(false);
  function AddInputHandler() {
    setShow(!show);
  }

  return (
    <div className="home-container flex flex-col justify-center items-center  bg-slate-200	w-full rounded-md bg-cover py-2">
      <div className="flex items-center justify-between px-[30px] py-[30px] md:px-[64px] md:py-[56px] max-w-[95%] xl:max-w-[800px] w-[95%]">
        <p className=" max-w-full font-medium py-[10px] px-[10px] md:w-[64%] lg:w-[40%] xl:w-[72%] 2xl:w-[60%] 3xl:w-[45%]">
          Deepak -Todo List
        </p>
        <button
          className="text-white linear rounded-md bg-black px-4 py-2 text-center font-medium transition duration-200 hover:!bg-slate-800"
          onClick={AddInputHandler}
        >
          Add Todo
        </button>
      </div>
      <div className={`show-input-container ${show ? "show" : ""}`}>
        <ShowInput />
      </div>
    </div>
  );
}
