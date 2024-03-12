import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  const links = ["useState", "useEffect", "useMemo", "useCallback"];

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
