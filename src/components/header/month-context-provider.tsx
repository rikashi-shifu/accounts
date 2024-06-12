"use client";
import moment, { type Moment } from "moment";
import { createContext, useState } from "react";

interface MonthContextType {
  startMonth: Moment | null;
  setStartMonth: (startMonth: Moment | null) => void;
  endMonth: Moment | null;
  setEndMonth: (endMonth: Moment | null) => void;
}

export const MonthContext = createContext<MonthContextType>({
  startMonth: null,
  setStartMonth: () => {},
  endMonth: null,
  setEndMonth: () => {},
});

interface MonthContextProviderProps {
  children: React.ReactNode;
}

const MonthContextProvider: React.FC<MonthContextProviderProps> = ({
  children,
}) => {
  const [startMonth, setStartMonth] = useState<Moment | null>(
    moment().startOf("month")
  );
  const [endMonth, setEndMonth] = useState<Moment | null>(null);

  return (
    <MonthContext.Provider
      value={{ startMonth, setStartMonth, endMonth, setEndMonth }}
    >
      {children}
    </MonthContext.Provider>
  );
};

export default MonthContextProvider;
