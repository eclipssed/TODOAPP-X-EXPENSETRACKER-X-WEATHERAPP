import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  toggleVisibility,
  editTodo,
  saveTodo,
  deleteTodo,
} from "../redux/TodoSlice";
import Button from "./Button";
import InputBox from "./InputBox";

function ListItem({ todo }) {
  const dispatch = useDispatch();
  const [editedText, setEditedText] = useState(todo.todo);

  const handleVisibility = (id) => {
    dispatch(toggleVisibility(id));
  };

  const handleEdit = (id) => {
    dispatch(editTodo(id));
  };

  const handleSave = (id) => {
    dispatch(saveTodo({ id, editedTodo: editedText }));

  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div
      className=" gap-2 p-4 flex justify-between items-center border rounded-lg  border-orange-500 my-2"
      key={todo.id}
    >
      <div className="flex gap-2 text-start">
        <input
          onChange={() => handleVisibility(todo.id)}
          type="checkbox"
          className="mx-2"
        />
        {!todo.hideText ? (
          todo.todo
        ) : (
          <InputBox
          
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
        )}
      </div>
      <div className="flex  gap-2">
        {todo.visible && (
          <>
            {todo.edit ? (
              <>
                <Button
                  bgColor={"bg-orange-500"}
                  label={"save"}
                  onClick={() => handleSave(todo.id)}
                >
                  Save
                </Button>
              </>
            ) : (
              <Button
                bgColor={"bg-orange-500"}
                label={"Edit"}
                onClick={() => handleEdit(todo.id)}
              >
                Edit
              </Button>
            )}
            <Button
              label={"Delete"}
              bgColor={"bg-orange-500"}
              onClick={() => handleDelete(todo.id)}
            >
              Delete
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default ListItem;
