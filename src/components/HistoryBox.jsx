import React from "react";

const HistoryBox = ({ withdraw, label, amount}) => {
  const borderColor = withdraw ? 'border-red-500' : 'border-green-500'
  return (
    <div className={`flex justify-between items-center dark:bg-gray-900 mt-4 shadow-lg `}>
      <p className="px-4 py-2">{label}</p>
      <p
      
      className= {` border-r-4 ${borderColor} px-4 py-2 h-full`}>{amount}</p>
    </div>
  );
};

export default HistoryBox;
