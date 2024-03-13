import { useMemo } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function HomePage() {
  const links = useMemo(
    () => [
      "useState",
      "useEffect",
      "useMemo",
      "useCallback",
      "useContext",
      "useRef",
      "useReducer",
    ],
    []
  );

  return (
    <main className="p-2">
      <ul>
        {links.map(link => (
          <li key={link}>
            <Link href={`/${link}`}>
              <Button className="w-32 my-1">{link}</Button>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default HomePage;
