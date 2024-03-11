"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const UseStatePage = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <>
      <h1 className="text-2xl">useState</h1>
      <h2 className="text-xl font-semibold">Count {count}</h2>
      <div className="flex gap-2">
        <Button className="w-24" onClick={increment}>
          Increment
        </Button>
        <Button className="w-24" variant="destructive" onClick={decrement}>
          Decrement
        </Button>
      </div>
    </>
  );
};

export default UseStatePage;
