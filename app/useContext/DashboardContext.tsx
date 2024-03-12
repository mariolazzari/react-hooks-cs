import { createContext, useContext } from "react";
import { User } from "./page";

export const DashboardContext = createContext<User | undefined>(undefined);

export function useUserContext() {
  const user = useContext(DashboardContext);

  if (!user) {
    throw new Error("UserContext not wrapped");
  }

  return user;
}
