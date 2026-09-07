import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// Lightweight wrappers around Next.js' navigation APIs that automatically
// handle the current locale (prefixing hrefs, reading the active locale, etc).
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
