import { createContext, useContext } from "react";

const PageStateContext = createContext<number | undefined>(undefined);

export const usePageState = () => {
  const state = useContext(PageStateContext);
  return state;
};
