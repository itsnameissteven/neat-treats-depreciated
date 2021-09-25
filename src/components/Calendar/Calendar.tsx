import React, { useEffect, useState } from "react";
import classNames from "classnames";

import { Icon } from "../index";

import "../../styles/global.scss";
import "./Calendar.scss";
interface IRenderDayArgs {
  key: string;
  i: number;
  monthNum: number;
  out?: boolean;
  altDate?: number;
}

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
  const [startDate, setStartDate] = useState<number | null>(null);
  const [endDate, setEndDate] = useState<number | null>(null);

  const [time, setTime] = useState({
    monthStr: Month[selectedDate.getMonth()],
    thisMonth: selectedDate.getMonth(),
    nextMonth: selectedDate.getMonth() + 1,
    year: selectedDate.getFullYear(),
    lastMonth: selectedDate.getMonth(),
  });

  useEffect(() => {
    setTime({
      monthStr: Month[selectedDate.getMonth()],
      thisMonth: selectedDate.getMonth() + 1,
      nextMonth: selectedDate.getMonth() + 2,
      year: selectedDate.getFullYear(),
      lastMonth: selectedDate.getMonth(),
    });
  }, [selectedDate]);

  const { monthStr, year, lastMonth, thisMonth, nextMonth } = time;

  const getDaysOfMonth = (month: number, year: number) => {
    return new Date(year, month, 0).getDate();
  };

  const startOfMonthDay = new Date(year, thisMonth - 1, 1).getDay();

  const onNextMonth = () => {
    setSelectedDate(new Date(year, nextMonth, 0));
  };

  const onPrevMonth = () => {
    setSelectedDate(new Date(year, lastMonth, 0));
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

  const activeDayClass = (dayValue: number, out?: boolean) => {
    return classNames({
      cells__day__date: true,
      "cells__day__date--out": out,
      "cells__day__date--one-day":
        dayValue === startDate || dayValue === endDate,
    });
  };

  const activeDayContainerClass = (dayValue: number, i: number) => {
    const isMiddle =
      startDate && endDate && dayValue > startDate && dayValue < endDate;
    return classNames({
      cells__day__container: true,
      "cells__day__container--start":
        (endDate && dayValue === startDate) ||
        i === 0 ||
        (i % 7 === 1 && isMiddle),
      "cells__day__container--end":
        (startDate && endDate && dayValue === endDate) ||
        (i % 7 === 0 && i !== 0 && isMiddle),
      "cells__day__container--middle": isMiddle,
    });
  };

  const renderDays = () => {
    const totalDays = getDaysOfMonth(thisMonth, year);
    let prevMonthDays = getDaysOfMonth(lastMonth, year);
    const cells: JSX.Element[] = [];

    const renderDay = ({ key, i, monthNum, out, altDate }: IRenderDayArgs) => {
      const dayValue = new Date(
        year,
        monthNum,
        altDate ? altDate : i
      ).valueOf();
      return (
        <div className="cells__day" key={`${key}-${i}`}>
          <div className={activeDayContainerClass(dayValue, cells.length + 1)}>
            <button
              className={activeDayClass(dayValue, out)}
              onClick={() => handleDateClick(dayValue)}
            >
              {altDate ? altDate.toString() : i.toString()}
            </button>
          </div>
        </div>
      );
    };

    for (let i = 0; i < startOfMonthDay; i++) {
      const lastDaysOfMonth = prevMonthDays - (startOfMonthDay - 1) + i;
      const args = {
        key: "last-month",
        i,
        monthNum: lastMonth,
        out: true,
        altDate: lastDaysOfMonth,
      };
      cells.push(renderDay(args));
    }

    for (let i = 1; i <= totalDays; i++) {
      const args = {
        key: "this-month",
        i,
        monthNum: thisMonth,
      };
      cells.push(renderDay(args));
    }

    for (let i = 1; cells.length < 42; i++) {
      const args = {
        key: "next-month",
        i,
        monthNum: nextMonth,
        out: true,
      };

      cells.push(renderDay(args));
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
