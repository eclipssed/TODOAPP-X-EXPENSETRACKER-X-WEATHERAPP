import React from "react";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { handleHistory, clearHistory } from "../redux/HistorySlice";
import AllHistory from "../components/AllHistory";

const ExpenseTracker = () => {
  const initialBalance = localStorage.getItem("balance") || "0.00";
  const initialIncome = localStorage.getItem("income") || "0.00";
  const initialExpense = localStorage.getItem("expense") || "0.00";

  const [balance, setBalance] = useState(initialBalance);
  const [income, setIncome] = useState(initialIncome);
  const [expense, setExpense] = useState(initialExpense);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const dispatch = useDispatch();

  // Update local storage whenever balance, income, or expense changes
  useEffect(() => {
    localStorage.setItem("balance", balance);
    localStorage.setItem("income", income);
    localStorage.setItem("expense", expense);
  }, [balance, income, expense]);

  const handleTransaction = () => {
    const parsedAmount = parseFloat(amount);
    const CapitalizedText =
      text.charAt(0).toUpperCase() + text.slice(1).toLocaleLowerCase();
    if (text === "") {
      return alert("Please write the purpose of transaction.");
    } else if (amount === "") {
      return alert("Please enter amount to proceed.");
    } else if (parsedAmount > 0) {
      const newIncome = parseFloat(income) + parsedAmount;
      const newBalance = parseFloat(balance) + parsedAmount;
      setIncome(newIncome.toFixed(2));
      setBalance(newBalance.toFixed(2));
      dispatch(
        handleHistory({
          text: CapitalizedText,
          amount: parsedAmount,
          withdraw: false,
        })
      );
    } else if (
      parsedAmount < 0 &&
      Math.abs(parsedAmount) <= parseFloat(balance)
    ) {
      const newExpense = parseFloat(expense) + parsedAmount;
      const newBalance = parseFloat(balance) + parsedAmount;
      setExpense(newExpense.toFixed(2));
      setBalance(newBalance.toFixed(2));
      dispatch(
        handleHistory({
          text: CapitalizedText,
          amount: parsedAmount,
          withdraw: true,
        })
      );
    } else if (
      parsedAmount < 0 &&
      Math.abs(parsedAmount) > parseFloat(balance)
    ) {
      alert(
        "The withdrawal amount cannot be greater than the current balance."
      );
    }

    setText("");
    setAmount("");
  };

  return (
    <section className="mt-10 mb-24  flex max-md:flex-col max-md:justify-center max-md:items-center max-md:gap-8 justify-evenly">
      <div className="max-md:w-2/3 w-1/3 text-center">
        <h2 className="text-xl font-bold max-w-md">Expense Tracker</h2>
        <div className="mt-4 font-bold">
          <h3>Your Balance</h3>
          <p>${balance}</p>
        </div>
        <div className="bg-white shadow-lg flex justify-between  py-4 dark:bg-gray-900 mt-4 font-bold">
          <div className="border-gray-300 border-r w-full ">
            <h3>Income</h3>
            <p className="text-green-500">${income}</p>
          </div>
          <div className="w-full">
            <h3>Expenses</h3>
            <p className="text-red-500">${expense}</p>
          </div>
        </div>
        <div className="my-4 font-bold">
          <h4>Add new transaction</h4>
        </div>
        <hr />

        <div className="mt-2 font-semibold">
          <h4 className="float-left">Text</h4>
          <InputBox
            onChange={(e) => setText(e.target.value)}
            value={text}
            type={"text"}
            width={"w-full"}
            placeholder={"Enter Text"}
          />
        </div>
        <div>
          <div className="flex justify-between items-center font-semibold">
            <h4>Amount</h4>
            <div className="flex justify-start flex-col items-start">
              <h4>( Positive-Income,</h4>
              <h4>Negative-Expense )</h4>
            </div>
          </div>
          <InputBox
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
            type={"number"}
            width={"w-full"}
            placeholder={"0.00"}
          />
        </div>
        <div>
          <Button
            onClick={handleTransaction}
            type={"submit"}
            txtColor={"text-white"}
            bgColor={"bg-orange-500"}
            label={"Add Transaction"}
            width={"w-full"}
          />
        </div>
      </div>

      <div className="max-md:w-2/3 w-1/3 font-bold">
        <div className="flex justify-between">
          <h4 className="my-4 text-xl">History</h4>
          <Button
            onClick={() => dispatch(clearHistory())}
            txtColor={"text-white"}
            bgColor={"bg-orange-500"}
            label={"clear History"}
          />
        </div>
        <hr />
        <AllHistory />
      </div>
    </section>
  );
};

export default ExpenseTracker;
