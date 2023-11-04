import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addTodo, updateTodo, deleteTodo } from "../../redux/action";
import ShowInput from "./ShowInput";

export default function TodoItem() {
  const [editModes, setEditModes] = useState([]);
  const [editedContent, setEditedContent] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const itemsPerPage = 40;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;

  function EditInputHandler(index) {
    const newEditModes = [...editModes];
    newEditModes[index] = !newEditModes[index];
    setEditModes(newEditModes);
  }

  function handleContentChange(index, newContent) {
    const newEditedContent = [...editedContent];
    newEditedContent[index] = newContent;
    setEditedContent(newEditedContent);
  }

  function saveContent(index) {
    if (editedContent[index]) {
      dispatch(
        updateTodo({ id: todos[index].id, title: editedContent[index] })
      );
    }
    EditInputHandler(index); // Close the edit mode after saving
  }

  function deleteItem(index) {
    const todoId = todos[index].id;
    dispatch(deleteTodo(todoId));
  }

  function toggleCompleted(index) {
    const updatedTodos = [...todos];
    updatedTodos[index] = {
      ...updatedTodos[index],
      completed: !updatedTodos[index].completed,
    };
    dispatch(updateTodo(updatedTodos[index]));
  }

  useEffect(() => {
    setEditModes(new Array(todos.length).fill(false));
    setEditedContent(todos.map((todo) => todo.title));
  }, [todos]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
      response.data.forEach((todo) => {
        dispatch(addTodo(todo));
      });
    });
  }, []);

  const totalItems = todos.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  return (
    <div className="todo-items-container w-full mt-5">
      {todos.slice(startIndex, endIndex).map((todo, index) => (
        <div className="todo-item flex flex-col mt-5 justify-between items-center px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800 sm:flex-row">
          <div className="flex">
            <input
              type="checkbox"
              className="accent-black mr-2"
              checked={todo.completed}
              onChange={() => toggleCompleted(index)}
            ></input>
            <p>{todo.title}</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="">
              <button
                onClick={() => EditInputHandler(index)}
                className="text-white linear rounded-md bg-black mr-2 px-4 py-2 text-center font-medium transition duration-200 hover:!bg-slate-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6"
                >
                  <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                </svg>
              </button>
              <button
                onClick={() => deleteItem(index)}
                className="text-white linear rounded-md bg-black px-4 py-2 text-center font-medium transition duration-200 hover:!bg-slate-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div
              className={`show-input-container ${
                editModes[index] ? "show" : ""
              }`}
            >
              <ShowInput
                label=""
                type="text"
                name="todo"
                value={editedContent[index]}
                buttonName="Save Changes"
                onChange={(e) => handleContentChange(index, e.target.value)}
                onClick={() => saveContent(index)}
              />
            </div>
          </div>
        </div>
      ))}
      <div className="pagination mt-5 flex items-center justify-center">
        <button
          className="text-white linear mr-2 rounded-md bg-black px-4 py-2 text-center font-medium transition duration-200 hover:!bg-slate-800"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span>
          {currentPage} of {totalPages}
        </span>
        <button
          className="text-white linear ml-2 rounded-md bg-black px-4 py-2 text-center font-medium transition duration-200 hover:!bg-slate-800"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
