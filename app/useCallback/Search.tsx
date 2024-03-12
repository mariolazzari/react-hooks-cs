"use client";
import { memo } from "react";
import { Input } from "@/components/ui/input";

type SearchProps = {
  onChange: (name: string) => void;
};

function Search({ onChange }: SearchProps) {
  console.log("search rendered");

  return (
    <Input
      placeholder="Search user..."
      onChange={e => onChange(e.target.value)}
    />
  );
}

export default memo(Search);
