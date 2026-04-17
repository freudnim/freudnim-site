import Link from "next/link";

const links = [
    { href: "/", label: "home" },
    { href: "/about", label: "about" },
    { href: "/comms", label: "comms" },
    { href: "/contact", label: "contact" },
    { href: "/shop", label: "shop" },
    { href: "/featured", label: "featured" },
];

export default function Nav() {
    return (
        <nav className="flex flex-row flex-wrap justify-center sm:justify-start gap-6 text-sm subheading-text mb-2 w-full">
            {links.map(({ href, label }) => (
                <Link key={href} href={href} className="transition-all duration-200 ease-out hover:-translate-y-1 hover:opacity-100 opacity-70">
                    {label}
                </Link>
            ))}
        </nav>
    );
}