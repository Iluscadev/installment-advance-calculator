import { createContext, useState } from "react";

export const ResContext = createContext();

export const ResProvider = ({ children }) => {
  const [resData, setResData] = useState({
    1: "R$ 0,00",
    15: "R$ 0,00",
    30: "R$ 0,00",
    90: "R$ 0,00",
  });

  return (
    <ResContext.Provider value={{ resData, setResData }}>
      {children}
    </ResContext.Provider>
  );
};
