import React from "react";
import ListItem from "./ListItem";
import { useSelector } from "react-redux";

const ListItems = () => {
  const todos = useSelector((state) => state.todos);

 

  return (
    <>
      <div className="w-full h-[380px] scrollbar mt-4 px-2 overflow-y-auto">
        {todos.length ? (
          todos.map((todo) => <ListItem key={todo.id} todo={todo} />)
        ) : (
          <div className="border border-orange-500 w-2/3 max-md:w-full mx-auto rounded-full">
            <p className="font-semibold text-xl p-2 text-center ">
              No todos yet...
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default ListItems;
