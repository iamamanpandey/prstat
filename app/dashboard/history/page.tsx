'use client'
import React from "react";
import { useState } from "react";
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import DatePicker from "react-date-picker";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
const HistoryPage = () => {
  const [value, onChange] = useState<Value>(new Date());


  return (
    <div className="my-4">
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Workouts
      </h2>
      <div className="flex ">
        <DatePicker onChange={onChange} value={value} />
        <button className="bg-blue-400 shadow-md m-4 px-4 border-2 border-blue-600">Submit</button>
      </div>
    </div>
  );
};

export default HistoryPage;
