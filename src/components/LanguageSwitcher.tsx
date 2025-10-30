"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

const locales = ["fr", "en"] as const;

type Locale = typeof locales[number];

function switchLocaleInPath(path: string, to: Locale) {
  const parts = path.split("/").filter(Boolean);
  if (parts.length === 0) return `/${to}`;
  if (locales.includes(parts[0] as Locale)) {
    parts[0] = to;
  } else {
    parts.unshift(to);
  }
  return `/${parts.join("/")}`;
}

export default function LanguageSwitcher({ className }: { className?: string }) {
  const params = useParams();
  const pathname = usePathname() || "/";
  const current = (params?.locale as Locale) || "fr";
  const other: Locale = current === "fr" ? "en" : "fr";
  const href = switchLocaleInPath(pathname, other);

  return (
    <div className={className}>
      <Link href={href} prefetch className="text-sm text-foreground/80 hover:text-foreground">
        {other.toUpperCase()}
      </Link>
    </div>
  );
}
