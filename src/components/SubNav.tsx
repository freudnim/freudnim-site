"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { href: "/stream/gifted_art", label: "gifted art showcase" },
    // { href: "/stream/collabs", label: "collabs (wip)" },
    // { href: "/stream/charity", label: "events (wip)" },
];

export default function SubNav() {
    const pathname = usePathname();

    return (
        <nav className="flex flex-col flex-wrap text-center justify-center gap-5 text-xl subheading-text mb-6 w-full">
            {links.map(({ href, label }) => {
                const isActive = pathname === href;

                return (
                    <Link
                        key={href}
                        href={href}
                        className={`transition-all duration-200 ease-out hover:-translate-y-1 hover:opacity-100 
            ${isActive ? "opacity-100 underline" : "opacity-60"}`}
                    >
                        {label}
                    </Link>
                );
            })}
        </nav>
    );
}