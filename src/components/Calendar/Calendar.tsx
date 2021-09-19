import React, { useEffect, useState } from "react";

import { Icon } from "../index";

import "./Calendar.scss";

enum Day {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

enum Month {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [date, setDate] = useState(selectedDate.getDate());
  const [day, setDay] = useState(Day[selectedDate.getDay()]);
  // const [year, setYear] = useState(selectedDate.getFullYear());
  // const [month, setMonth] = useState(Month[selectedDate.getMonth()]);
  // const monthNum = selectedDate.getMonth() + 1;
  // const lastMonth = selectedDate.getMonth();
  const [time, setTime] = useState({
    monthStr: Month[selectedDate.getMonth()],
    monthNum: selectedDate.getMonth() + 1,
    year: selectedDate.getFullYear(),
    lastMonth: selectedDate.getMonth(),
  });

  useEffect(() => {
    setTime({
      monthStr: Month[selectedDate.getMonth()],
      monthNum: selectedDate.getMonth() + 1,
      year: selectedDate.getFullYear(),
      lastMonth: selectedDate.getMonth() - 1,
    });
  }, [selectedDate]);

  const { monthStr, monthNum, year, lastMonth } = time;

  const getDaysOfMonth = (month: number, year: number) => {
    return new Date(year, month, 0).getDate();
  };

  const startOfMonthDay = new Date(year, monthNum - 1, 1).getDay();

  const onNextMonth = () => {
    setSelectedDate(new Date(year, monthNum));
  };

  const onPrevMonth = () => {
    setSelectedDate(new Date(year, lastMonth));
  };

  const renderDays = () => {
    const totalDays = getDaysOfMonth(monthNum, year);
    let prevMonth = getDaysOfMonth(lastMonth, year);
    const priorMonth: JSX.Element[] = [];
    const emptySpots = 7 - ((startOfMonthDay + totalDays) % 7);
    console.log(year, monthNum, startOfMonthDay);
    for (let i = startOfMonthDay; i > 0; i--) {
      const cell = (
        <div className="cells__day">
          <div className="cells__day__date--out">
            <p>{prevMonth.toString()}</p>
          </div>
        </div>
      );
      prevMonth--;
      priorMonth.unshift(cell);
    }

    const cells = [...priorMonth];
    for (let i = 1; i <= totalDays; i++) {
      const cell = (
        <div className="cells__day">
          <div className="cells__day__date">
            <p>{i.toString()}</p>
          </div>
        </div>
      );
      cells.push(cell);
    }

    for (let i = 1; cells.length < 42; i++) {
      const cell = (
        <div className="cells__day">
          <div className="cells__day__date--out">
            <p>{i.toString()}</p>
          </div>
        </div>
      );
      cells.push(cell);
    }

    return <div className="cells">{cells}</div>;
  };

  return (
    <>
      <div className="calendar">
        <div className="calendar__header">
          <button onClick={onPrevMonth}>
            <Icon name="chevron-left" size={20} />
          </button>
          <p>
            {monthStr} {year}
          </p>
          <button onClick={onNextMonth}>
            <Icon name="chevron-right" size={20} />
          </button>
        </div>
        {renderDays()}
      </div>
      <Icon name="chevron-up" size={20} className="icon" />
    </>
  );
};

export default Calendar;
