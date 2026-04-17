import Link from "next/link";

const links = [
    { href: "/", label: "home" },
    { href: "/about", label: "about" },
    { href: "https://vgen.co/freudnim", label: "comms", external: true },
    // { href: "/contact", label: "contact" },
    { href: "https://feebun.shop/listing/4361701114/genshin-2-acrylic-keychain-double-sided", label: "shop", external: true },
    // { href: "/featured", label: "featured" },
];

export default function Nav() {
    return (
        <nav className="flex flex-row flex-wrap justify-center sm:justify-start gap-6 text-sm subheading-text mb-2 w-full">
            {links.map(({ href, label, external }) => (
                <Link key={href} href={href} className="transition-all duration-200 ease-out hover:-translate-y-1 hover:opacity-100 opacity-70" {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}>
                    {label}
                </Link>
            ))}
        </nav>
    );
}