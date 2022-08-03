import { createContext, ReactNode, useState } from "react";
import { products } from "../Interface";

export const Theme = createContext<any>({
  copy: [],
  setCopy: () => {},
  sum:''
});

export const Context: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<products[]>([]);
  return <Theme.Provider value={{ data, setData}}>{children}</Theme.Provider>;
};
