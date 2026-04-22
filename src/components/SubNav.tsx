"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { href: "/stream/gifted_art", img: "/4-22-26_panel_2.png" },
    // { href: "/stream/collabs", label: "collabs (wip)" },
    // { href: "/stream/charity", label: "events (wip)" },
];

export default function SubNav() {
    const pathname = usePathname();

    return (
        <nav className="flex flex-col flex-wrap text-center justify-center gap-5 text-xl subheading-text mb-6 w-full">
            {links.map(({ href, img }) => {
                const isActive = pathname === href;

                return (
                    <Link
                        key={href}
                        href={href}
                        className={`transition-all duration-200 ease-out hover:-translate-y-1 hover:opacity-100 
            ${isActive ? "opacity-100 underline" : "opacity-80"}`}
                    >
                        <img
                            src={img}
                            alt=""
                            className="mx-auto w-auto"
                        />
                    </Link>
                );
            })}
        </nav>
    );
}