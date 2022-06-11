import { createContext, useContext } from "react";
import useSessionStorage from "../hooks/useSessionStorage";

interface Props {
  children: React.ReactNode;
}

export type PageDispatch = React.Dispatch<any>;

const PageStateContext = createContext<number | undefined>(undefined);

const PageDispatchContext = createContext<PageDispatch | undefined>(undefined);

const PageContextProveder = ({ children }: Props) => {
  const [page, setPage] = useSessionStorage("offset", 0);
  return (
    <PageDispatchContext.Provider value={setPage}>
      <PageStateContext.Provider value={page}>
        {children}
      </PageStateContext.Provider>
    </PageDispatchContext.Provider>
  );
};

export const usePageState = () => {
  const state = useContext(PageStateContext);
  return state;
};

export const usePageDispatch = () => {
  const dispatch = useContext(PageDispatchContext);
  return dispatch;
};

export default PageContextProveder;
