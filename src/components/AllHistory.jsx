import React from "react";
import HistoryBox from "./HistoryBox";
import { useSelector } from "react-redux";

const AllHistory = () => {
    const history = useSelector((state) => state.history);
  return (
    <>
      <div className="h-[430px] scrollbar mt-4 px-2 overflow-y-auto">
        {history.map((item) => (
          <HistoryBox
            key={item.id}
            label={item.text}
            withdraw={item.withdraw}
            amount={item.amount}
          />
        ))}
      </div>
    </>
  );
};

export default AllHistory;
