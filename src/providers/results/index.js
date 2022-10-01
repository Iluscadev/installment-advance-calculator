import { createContext, useState } from "react";

export const ResultContext = createContext();

export const ResultsProvider = ({ children }) => {
  const [results, setResults] = useState({
    1: "R$ 0,00",
    15: "R$ 0,00",
    30: "R$ 0,00",
    90: "R$ 0,00",
  });

  return (
    <ResultContext.Provider value={{ results, setResults }}>
      {children}
    </ResultContext.Provider>
  );
};
