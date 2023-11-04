"use client";
import Header from "./components/Layout/Header";
import Home from "./components/Layout/Home";
import TodoItem from "./components/Layout/TodoItem";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <main className="w-full font-sans flex min-h-screen flex-col items-center m-auto p-10">
        <Header />
        <Home />
        <TodoItem />
      </main>
    </Provider>
  );
}
