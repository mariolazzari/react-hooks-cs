"use client";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";

function UseRefPage() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const onIncrementClick = () => {
    setCount(prevCount => prevCount + 1);
    countRef.current++;

    console.log("Count state:", count);
    console.log("Count ref:", countRef.current);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h2>Count state: {count}</h2>
      <h2>Count ref: {countRef.current}</h2>

      <Button onClick={onIncrementClick}>Increment</Button>

      <input ref={inputRef} placeholder="Type something..." />
    </div>
  );
}

export default UseRefPage;
