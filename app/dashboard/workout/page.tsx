"use client";
import React from "react";
import { useState } from "react";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
const WorkoutPage = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="my-4">
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Workouts
      </h2>
      <div className="flex ">
        <button
          type="submit"
          className="flex my-4 w-full justify-center rounded-md border-2 border-gray-400  px-3 py-1.5 text-sm font-semibold leading-6  hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
       Add Exercise
        </button>
      </div>
    </div>
  );
};

export default WorkoutPage;
