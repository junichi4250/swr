import { createContext, useContext, useState } from "react";
import useSessionStorage from "../hooks/useSessionStorage";

interface Props {
  children: React.ReactNode;
}

export type PageCountDispatch = React.Dispatch<any>;

const PageCountStateContext = createContext<number | undefined>(undefined);

const PageCountDispatchContext = createContext<PageCountDispatch | undefined>(
  undefined
);

const PageCountContextProveder = ({ children }: Props) => {
  const [pageCount, setPageCount] = useState<number>(1);
  return (
    <PageCountDispatchContext.Provider value={setPageCount}>
      <PageCountStateContext.Provider value={pageCount}>
        {children}
      </PageCountStateContext.Provider>
    </PageCountDispatchContext.Provider>
  );
};

export const useCountPageState = () => {
  const state = useContext(PageCountStateContext);
  return state;
};

export const useCountPageDispatch = () => {
  const dispatch = useContext(PageCountDispatchContext);
  return dispatch;
};

export default PageCountContextProveder;
