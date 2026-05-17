import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";

export const Header = ({}) => {
  return (
    <header className="w-full border-b">
      <div className="mx-auto flex max-w-5xl items-center justify-between p-4">
        {/* left */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/profile.jpg"
            alt="BM"
            width={36}
            height={36}
            className="rounded-full object-cover"
          />
          <span className="text-lg font-semibold">Branden Moya</span>
        </Link>

        {/* right */}
        <div className="flex items-center gap-6">
          <nav className="flex items-center gap-4 text-sm text-muted">
            <Link href="/projects" className="hover:text-hover transition">
              Projects
            </Link>
            <Link href="/experience" className="hover:text-hover transition">
              Experience
            </Link>
            <Link href="/contact" className="hover:text-hover transition">
              Contact
            </Link>
          </nav>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
