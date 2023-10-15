import React from "react";
import AddItem from '../components/AddItem'
import ListItems from "../components/ListItems";

const Todo = () => {
  return (
    <section className="mt-10 mb-24 ">
      <div className="w-2/3 max-md:w-full mx-auto">
        <h1 className="font-bold text-xl ">Todo App</h1>
        <AddItem/>
        <ListItems />
      </div>
    </section>
  );
};

export default Todo;
