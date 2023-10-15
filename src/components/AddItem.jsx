import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, clearTodo } from "../redux/TodoSlice";
import InputBox from "./InputBox";
import Button from "./Button";

function InputField() {
  const [todoText, setTodoText] = React.useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleAddTodo = () => {
    const CapitalizedText =
    todoText.charAt(0).toUpperCase() + todoText.slice(1).toLocaleLowerCase();
    if (todoText.trim()) {
      dispatch(addTodo(CapitalizedText));
    }
    setTodoText("");
  };

  return (
    <div className=" w-full flex justify-center items-center gap-4">
      <InputBox
        width={"w-full"}
        type={"text"}
        placeholder={"Add Todo"}
        onChange={(e) => setTodoText(e.target.value)}
        value={todoText}
      />
      <Button
        txtColor={"text-white"}
        onClick={handleAddTodo}
        bgColor={"bg-orange-500"}
        label={"Add Todo"}
      />
      <Button
        txtColor={"text-white"}
        onClick={() => dispatch(clearTodo())}
        bgColor={"bg-orange-500"}
        label={"Clear All"}
      />
    </div>
  );
}

export default InputField;
