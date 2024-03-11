"use client";
import { Button } from "@/components/ui/button";
import { useState, useMemo } from "react";

const initialItems = [
  { id: 1, selected: true },
  { id: 2, selected: false },
  { id: 3, selected: false },
  { id: 4, selected: false },
];

const UseMemoPage = () => {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  const selectedItem = useMemo(() => {
    console.log("useMemo");
    return items.find(i => i.selected);
  }, [items]);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-2">
      <h1 className="text-2xl">useMemo</h1>
      <h2 className="text-xl font-semibold">Count {count}</h2>

      <div className="flex gap-2">
        <Button className="w-24" onClick={increment}>
          Increment
        </Button>
        <Button className="w-24" variant="destructive" onClick={decrement}>
          Decrement
        </Button>
      </div>

      <h3 className="text-xl">Selected item: {selectedItem?.id}</h3>
    </div>
  );
};

export default UseMemoPage;
