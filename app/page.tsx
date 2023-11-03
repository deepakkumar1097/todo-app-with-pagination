"use client";
import Header from "./components/Layout/Header";
import Home from "./components/Layout/Home";
import TodoItem from "./components/Layout/TodoItem";

export default function App() {
  return (
    <main className="w-full font-sans flex min-h-screen flex-col items-center m-auto p-10">
      <Header />
      <Home />
      <TodoItem />
    </main>
  );
}
