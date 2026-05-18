"use client";

import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const getLinkClass = (pathname: string, href: string): string => {
  const base = "transition-colors duration-200 underline-offset-4";

  if (pathname === href) {
    return `${base} underline decoration-2`;
  }

  return `${base} text-muted hover:text-foreground`;
};

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="w-full border-b border-border">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        {/* left */}
        <Link
          href="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-90"
        >
          <Image
            src="/profile.jpg"
            alt="Branden Moya"
            width={36}
            height={36}
            className="rounded-full object-cover"
          />

          <span className="text-lg font-medium tracking-tight">
            Branden Moya
          </span>
        </Link>

        {/* right */}
        <div className="flex items-center gap-6">
          <nav className="flex items-center gap-5 text-sm">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={getLinkClass(pathname, link.href)}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
