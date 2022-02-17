"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var index_1 = require("../index");
// enum Day {
//   Sunday,
//   Monday,
//   Tuesday,
//   Wednesday,
//   Thursday,
//   Friday,
//   Saturday,
// }
var Month;
(function (Month) {
    Month[Month["January"] = 0] = "January";
    Month[Month["February"] = 1] = "February";
    Month[Month["March"] = 2] = "March";
    Month[Month["April"] = 3] = "April";
    Month[Month["May"] = 4] = "May";
    Month[Month["June"] = 5] = "June";
    Month[Month["July"] = 6] = "July";
    Month[Month["August"] = 7] = "August";
    Month[Month["September"] = 8] = "September";
    Month[Month["October"] = 9] = "October";
    Month[Month["November"] = 10] = "November";
    Month[Month["December"] = 11] = "December";
})(Month || (Month = {}));
var Calendar = function () {
    var _a = (0, react_1.useState)(new Date()), selectedDate = _a[0], setSelectedDate = _a[1];
    var _b = (0, react_1.useState)(null), startDate = _b[0], setStartDate = _b[1];
    var _c = (0, react_1.useState)(null), endDate = _c[0], setEndDate = _c[1];
    var _d = (0, react_1.useState)({
        monthStr: Month[selectedDate.getMonth()],
        thisMonth: selectedDate.getMonth(),
        nextMonth: selectedDate.getMonth() + 1,
        year: selectedDate.getFullYear(),
        lastMonth: selectedDate.getMonth(),
    }), time = _d[0], setTime = _d[1];
    (0, react_1.useEffect)(function () {
        setTime({
            monthStr: Month[selectedDate.getMonth()],
            thisMonth: selectedDate.getMonth() + 1,
            nextMonth: selectedDate.getMonth() + 2,
            year: selectedDate.getFullYear(),
            lastMonth: selectedDate.getMonth(),
        });
    }, [selectedDate]);
    var monthStr = time.monthStr, year = time.year, lastMonth = time.lastMonth, thisMonth = time.thisMonth, nextMonth = time.nextMonth;
    var getDaysOfMonth = function (month, year) {
        return new Date(year, month, 0).getDate();
    };
    var startOfMonthDay = new Date(year, thisMonth - 1, 1).getDay();
    var onNextMonth = function () {
        setSelectedDate(new Date(year, nextMonth, 0));
    };
    var onPrevMonth = function () {
        setSelectedDate(new Date(year, lastMonth, 0));
    };
    var daysOfWeek = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    var renderDaysOfWeek = function () {
        return daysOfWeek.map(function (day, i) {
            return (react_1.default.createElement("p", { className: "calendar__day-of-week__name", key: i }, day));
        });
    };
    var handleDateClick = function (dayValue) {
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
        }
        else if (startDate < dayValue) {
            setEndDate(dayValue);
        }
    };
    var activeDayClass = function (dayValue, out) {
        return (0, classnames_1.default)({
            cells__day__date: true,
            "cells__day__date--out": out,
            "cells__day__date--one-day": dayValue === startDate || dayValue === endDate,
        });
    };
    var activeDayContainerClass = function (dayValue, i) {
        var isMiddle = startDate && endDate && dayValue > startDate && dayValue < endDate;
        return (0, classnames_1.default)({
            cells__day__container: true,
            "cells__day__container--start": (endDate && dayValue === startDate) ||
                i === 0 ||
                (i % 7 === 1 && isMiddle),
            "cells__day__container--end": (startDate && endDate && dayValue === endDate) ||
                (i % 7 === 0 && i !== 0 && isMiddle),
            "cells__day__container--middle": isMiddle,
        });
    };
    var renderDays = function () {
        var totalDays = getDaysOfMonth(thisMonth, year);
        var prevMonthDays = getDaysOfMonth(lastMonth, year);
        var cells = [];
        var renderDay = function (_a) {
            var key = _a.key, i = _a.i, monthNum = _a.monthNum, out = _a.out, altDate = _a.altDate;
            var dayValue = new Date(year, monthNum, altDate ? altDate : i).valueOf();
            return (react_1.default.createElement("div", { className: "cells__day", key: "".concat(key, "-").concat(i) },
                react_1.default.createElement("div", { className: activeDayContainerClass(dayValue, cells.length + 1) },
                    react_1.default.createElement("button", { className: activeDayClass(dayValue, out), onClick: function () { return handleDateClick(dayValue); } }, altDate ? altDate.toString() : i.toString()))));
        };
        for (var i = 0; i < startOfMonthDay; i++) {
            var lastDaysOfMonth = prevMonthDays - (startOfMonthDay - 1) + i;
            var args = {
                key: "last-month",
                i: i,
                monthNum: lastMonth,
                out: true,
                altDate: lastDaysOfMonth,
            };
            cells.push(renderDay(args));
        }
        for (var i = 1; i <= totalDays; i++) {
            var args = {
                key: "this-month",
                i: i,
                monthNum: thisMonth,
            };
            cells.push(renderDay(args));
        }
        for (var i = 1; cells.length < 42; i++) {
            var args = {
                key: "next-month",
                i: i,
                monthNum: nextMonth,
                out: true,
            };
            cells.push(renderDay(args));
        }
        return react_1.default.createElement("div", { className: "cells" }, cells);
    };
    return (react_1.default.createElement("div", { className: "calendar" },
        react_1.default.createElement("div", { className: "calendar__header" },
            react_1.default.createElement("button", { onClick: onPrevMonth },
                react_1.default.createElement(index_1.Icon, { name: "chevron-left", size: 24 })),
            react_1.default.createElement("p", { className: "calendar__header__month" },
                monthStr,
                " ",
                year),
            react_1.default.createElement("button", { onClick: onNextMonth },
                react_1.default.createElement(index_1.Icon, { name: "chevron-right", size: 24 }))),
        react_1.default.createElement("div", { className: "calendar__day-of-week" }, renderDaysOfWeek()),
        renderDays()));
};
exports.default = Calendar;
