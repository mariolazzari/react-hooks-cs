"use client";
import { Button } from "@/components/ui/button";
import { useState, useCallback } from "react";
import Search from "./Search";

const allUsers = ["Mario", "Mariarosa", "Maria", "Roberto"];

const UseCallbackPage = () => {
  const [users, setUsers] = useState(allUsers);

  const onSearch = useCallback(
    (search: string) => {
      const filtered = users.filter(user => user.includes(search));
      setUsers(filtered);
    },
    [users]
  );

  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-2">
      <h1 className="text-2xl">useCallback</h1>

      <Button className="w-24" onClick={() => setUsers(allUsers)}>
        Shuffle
      </Button>

      <Search onChange={onSearch} />

      <ul>
        {users.map(user => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseCallbackPage;
