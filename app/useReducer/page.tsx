"use client";
import { Button } from "@/components/ui/button";
import { useReducer } from "react";

type State = {
  count: number;
  error: string | null;
};

type Action = {
  type: "increment" | "decrement";
};

const initialState: State = {
  count: 0,
  error: null,
};

function checkError(count: number): State {
  switch (true) {
    case count < -5:
      return {
        count: -5,
        error: "Min reached!",
      };

    case count > 5:
      return {
        count: 5,
        error: "Max reached",
      };

    default:
      return {
        count,
        error: null,
      };
  }
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "increment":
      return checkError(state.count + 1);

    case "decrement":
      return checkError(state.count - 1);

    default:
      return state;
  }
}

function UseReducerPage() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const decrement = () => dispatch({ type: "decrement" });
  const increment = () => dispatch({ type: "increment" });

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-semibold">useReducer</h2>

      <h3 className="text-xl text-sky-500">Count: {state.count}</h3>

      {state.error && (
        <h3 className="text-lg text-red-500 my-2">{state.error}</h3>
      )}

      <div className="flex gap-2">
        <Button variant="destructive" onClick={decrement}>
          -
        </Button>
        <Button onClick={increment}>+</Button>
      </div>
    </div>
  );
}

export default UseReducerPage;
