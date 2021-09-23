import React, { useEffect, useState } from "react";
import classNames from "classnames";

import { Icon } from "../index";

import "../../styles/global.scss";
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
  const [startDate, setStartDate] = useState<number | null>(null);
  const [endDate, setEndDate] = useState<number | null>(null);
  // const [year, setYear] = useState(selectedDate.getFullYear());
  // const [month, setMonth] = useState(Month[selectedDate.getMonth()]);
  // const monthNum = selectedDate.getMonth() + 1;
  // const lastMonth = selectedDate.getMonth();
  const [time, setTime] = useState({
    monthStr: Month[selectedDate.getMonth()],
    monthNum: selectedDate.getMonth() + 1,
    thisMonth: selectedDate.getMonth(),
    year: selectedDate.getFullYear(),
    lastMonth: selectedDate.getMonth(),
  });

  useEffect(() => {
    setTime({
      monthStr: Month[selectedDate.getMonth()],
      monthNum: selectedDate.getMonth() + 1,
      thisMonth: selectedDate.getMonth(),
      year: selectedDate.getFullYear(),
      lastMonth: selectedDate.getMonth() - 1,
    });
  }, [selectedDate]);

  useEffect(() => {
    console.log(startDate, endDate);
  }, [startDate, endDate]);

  const { monthStr, monthNum, year, lastMonth, thisMonth } = time;

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

  const daysOfWeek = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

  const renderDaysOfWeek = () => {
    return daysOfWeek.map((day, i) => {
      return (
        <p className="calendar__day-of-week__name" key={i}>
          {day}
        </p>
      );
    });
  };

  const handleDateClick = (dayValue: number) => {
    if (startDate && endDate) {
      setStartDate(dayValue);
      setEndDate(null);
      return;
    }
    if (startDate === dayValue) {
      setStartDate(null);
    }

    if (!startDate || startDate > dayValue) {
      setStartDate(dayValue);
    } else if (startDate < dayValue) {
      setEndDate(dayValue);
    }
  };

  const activeDayClass = (dayValue: number) => {
    // console.log(dayValue === startDate);
    return classNames({
      cells__day__date: true,
      "cells__day__date--one-day":
        dayValue === startDate || dayValue === endDate,
      // "cells__day__date--two-day":
      //   startDate && endDate && dayValue >= startDate && dayValue <= endDate,
    });
  };

  const activeDayContainerClass = (dayValue: number, out?: true) => {
    // console.log(startDate && endDate && dayValue === startDate);
    return classNames({
      cells__day__container: true,
      "cells__day__container--out": out,
      "cells__day__container--start": endDate && dayValue === startDate,
      "cells__day__container--end":
        startDate && endDate && dayValue === endDate,
      "cells__day__container--middle":
        startDate && endDate && dayValue > startDate && dayValue < endDate,
    });
  };

  const renderDays = () => {
    const totalDays = getDaysOfMonth(monthNum, year);
    let prevMonth = getDaysOfMonth(lastMonth, year);
    const priorMonth: JSX.Element[] = [];
    const emptySpots = 7 - ((startOfMonthDay + totalDays) % 7);
    // console.log(year, monthNum, startOfMonthDay);
    for (let i = startOfMonthDay; i > 0; i--) {
      const dayValue = new Date(year, thisMonth, i).valueOf();
      const cell = (
        <div className="cells__day" key={`last-month${i}`}>
          <button className={activeDayContainerClass(dayValue, true)}>
            {prevMonth.toString()}
          </button>
        </div>
      );
      prevMonth--;
      priorMonth.unshift(cell);
    }

    const cells = [...priorMonth];
    for (let i = 1; i <= totalDays; i++) {
      const dayValue = new Date(year, thisMonth, i).valueOf();
      const cell = (
        <div className="cells__day" key={`this-month${i}`}>
          <div className={activeDayContainerClass(dayValue)}>
            <button
              className={activeDayClass(dayValue)}
              onClick={() => handleDateClick(dayValue)}
            >
              {i.toString()}
            </button>
          </div>
        </div>
      );
      cells.push(cell);
    }

    for (let i = 1; cells.length < 42; i++) {
      const cell = (
        <div className="cells__day" key={`next-month${i}`}>
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
    <div className="calendar">
      <div className="calendar__header">
        <button onClick={onPrevMonth}>
          <Icon name="chevron-left" size={24} />
        </button>
        <p className="calendar__header__month">
          {monthStr} {year}
        </p>
        <button onClick={onNextMonth}>
          <Icon name="chevron-right" size={24} />
        </button>
      </div>
      <div className="calendar__day-of-week">{renderDaysOfWeek()}</div>
      {renderDays()}
    </div>
  );
};

export default Calendar;
