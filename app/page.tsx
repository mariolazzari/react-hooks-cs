import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  const links = ["useState", "useEffect", "useMemo"];

  return (
    <main className="p-2">
      <ul className="flex flex-col gap-2">
        {links.map(link => (
          <li key={link}>
            <Link href={`/${link}`}>
              <Button>{link}</Button>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
