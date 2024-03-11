import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="p-2">
      <ul className="flex flex-col gap-2">
        <li>
          <Link href="/useState">
            <Button>useState</Button>
          </Link>
        </li>

        <li>
          <Link href="/useEffect">
            <Button>useEffect</Button>
          </Link>
        </li>
      </ul>
    </main>
  );
}
