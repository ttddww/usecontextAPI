import { createContext, useState } from "react";

export const MyContext = createContext();

function MyProvider({ children }) {
  const [count, setCount] = useState(0);

  const increement = () => {
    setCount((prev) => prev + 1);
  };

  let contextData = {
    count,
    increement,
  };

  return (
    <MyContext.Provider value={contextData}>{children}</MyContext.Provider>
  );
}

export default MyProvider;
