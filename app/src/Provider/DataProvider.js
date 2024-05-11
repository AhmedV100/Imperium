import React, { createContext, useContext, useState } from "react";
import Data from "../Data/Organizations.json";

const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

export default function DataProvider({ children }) {
  const [data, setData] = useState(Data);
  console.log("i am in the provider ", Data);

  return (
    <AppContext.Provider value={{ data, setData }}>
      {children}
    </AppContext.Provider>
  );
}


