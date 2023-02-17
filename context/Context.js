import React, { createContext, useState } from "react";

export const MyContext = createContext(null);
const Context = ({ children }) => {
  const [inputValue, setInputValue] = useState();
  const [accMenu, setAccMenu] = useState(false);
  const [data, setData] = useState([]);
  const [dummy, setDummy] = useState(false);
  const [log, setLog] = useState();

  const value = { inputValue, setInputValue, data, setData, dummy, setDummy, log, setLog, accMenu, setAccMenu };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export default Context;
