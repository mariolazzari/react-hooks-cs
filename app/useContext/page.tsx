"use client";
import { useState } from "react";
import Dashboard from "./Dashboard";
import { DashboardContext } from "./DashboardContext";

export type User = {
  isSubscribed: boolean;
  name: string;
};

function UseContextPage() {
  const [user] = useState<User>({
    name: "Mario",
    isSubscribed: true,
  });

  return (
    <DashboardContext.Provider value={user}>
      <Dashboard />
    </DashboardContext.Provider>
  );
}

export default UseContextPage;
