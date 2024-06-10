"use client";
import React, { useContext, useEffect, useState } from "react";
import moment, { Moment } from "moment";
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import cn from "@/lib/shad-classname";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MonthContext } from "./month-context-provider";

const months = moment.monthsShort();

const MonthPicker = () => {
  const { startMonth, setStartMonth, endMonth, setEndMonth } =
    useContext(MonthContext);
  const [year, setYear] = useState<Moment>(moment());

  useEffect(() => {
    console.log("startMonth: ", startMonth);
    console.log("endMonth: ", endMonth);
  }, [startMonth, endMonth]);

  const handleMonthClick = (month: number) => {
    const selectedDate = moment(year).month(month);

    if (!startMonth || (startMonth && endMonth)) {
      setStartMonth(selectedDate);
      setEndMonth(null);
    } else if (startMonth && !endMonth) {
      if (selectedDate.isSame(startMonth, "month")) {
        setStartMonth(moment().startOf("month"));
        setEndMonth(null);
      } else if (selectedDate.isBefore(startMonth)) {
        setEndMonth(startMonth);
        setStartMonth(selectedDate);
      } else {
        setEndMonth(selectedDate);
      }
    }
  };

  const isMonthInRange = (month: number) => {
    if (startMonth && endMonth) {
      const selectedDate = moment(year).month(month);
      return (
        selectedDate.isSameOrAfter(startMonth, "month") &&
        selectedDate.isSameOrBefore(endMonth, "month")
      );
    }
    return false;
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !(startMonth && endMonth) && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {startMonth && endMonth
            ? `${startMonth.format("MMM yyyy")} - ${endMonth.format(
                "MMM yyyy"
              )}`
            : startMonth && startMonth.format("MMM yyyy")}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex flex-col space-y-2 p-2">
        <Button
          onClick={() => {
            setStartMonth(moment().startOf("month"));
            setEndMonth(null);
            setYear(moment());
          }}
          className="bg-inherit text-black border hover:bg-[#f5f5f5]"
        >
          This Month
        </Button>
        <div className="rounded-md border px-4 py-3 flex flex-col gap-2">
          <div className="flex justify-between">
            <button
              onClick={() =>
                setYear((prev) => moment(prev).subtract(1, "years"))
              }
              className="border flex justify-center items-center p-1.5 rounded opacity-50 hover:opacity-100 hover:bg-[#f5f5f5]"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <p className="text-sm font-semibold flex justify-center items-center">
              {year.format("yyyy")}
            </p>
            <button
              onClick={() => setYear((prev) => moment(prev).add(1, "years"))}
              className="border flex justify-center items-center p-1.5 rounded opacity-50 hover:opacity-100 hover:bg-[#f5f5f5]"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-4 gap-y-2">
            {months.map((month, key) => {
              const isSelectedStart =
                startMonth &&
                startMonth.year() === year.year() &&
                startMonth.month() === key;
              const isSelectedEnd =
                endMonth &&
                endMonth.year() === year.year() &&
                endMonth.month() === key;
              const isInRange = isMonthInRange(key);
              const isCurrentMonth =
                moment().year() === year.year() && moment().month() === key;

              return (
                <button
                  key={key}
                  onClick={() => handleMonthClick(key)}
                  className={cn(
                    "px-1 py-2 text-sm duration-200",
                    isSelectedStart || isSelectedEnd
                      ? "text-white bg-[#18181b] rounded-md"
                      : isInRange
                      ? "text-neutral-600 bg-[#f5f5f5]"
                      : isCurrentMonth
                      ? "bg-[#f5f5f5] rounded-md text-neutral-600"
                      : "text-neutral-600 hover:bg-[#f5f5f5] hover:rounded-md"
                  )}
                >
                  {month}
                </button>
              );
            })}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default MonthPicker;
