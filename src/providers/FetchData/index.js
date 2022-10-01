import { createContext, useState } from "react";

export const ResContext = createContext();

export const ResProvider = ({ children }) => {
  const [resData, setResData] = useState({
    1: 0,
    15: 0,
    30: 0,
    90: 0,
  });

  return (
    <ResContext.Provider value={{ resData, setResData }}>
      {children}
    </ResContext.Provider>
  );
};
