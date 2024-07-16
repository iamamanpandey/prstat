// components/CalendarStrip.js
'use client'
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendarslider.css'; // Custom CSS for styling the calendar strip

const CalendarStrip = () => {
  const [date, setDate] = useState(new Date());

  const tileClassName = ({ date, view }:any) => {
    // Add custom class to highlight the current date
    if (view === 'month' && date.getDate() === new Date().getDate()) {
      return 'highlight';
    }
  };

  return (
    <div className="calendar-strip">
      <Calendar
        // onChange={setDate}
        value={date}
        tileClassName={tileClassName}
        showNeighboringMonth={false}
        view="month"
        showNavigation={false}
        minDetail="month"
        maxDetail="month"
        className="calendar"
      />
    </div>
  );
};

export default CalendarStrip;
