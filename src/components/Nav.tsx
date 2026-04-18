import Link from "next/link";

const links = [
    { href: "/", label: "home" },
    { href: "/about", label: "about" },
    { href: "/stream", label: "stream", highlight: true },
    { href: "https://vgen.co/freudnim", label: "comms", external: true },
    { href: "https://feebun.shop/listing/4361701114/genshin-2-acrylic-keychain-double-sided", label: "shop", external: true },
];

const EXTERNAL_LINK_ARROW = <svg
    className="w-3 h-3 ml-1 inline-block"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
>
    <path d="M7 17L17 7M17 7H8M17 7V16" />
</svg>;

export default function Nav() {
    return (
        <nav className="flex flex-row flex-wrap justify-center sm:justify-start gap-6 text-sm subheading-text mb-2 w-full">
            {links.map(({ href, label, external = false, highlight = false }) => (
                <Link key={href} href={href} className="transition-all duration-200 ease-out hover:-translate-y-1 hover:opacity-100 opacity-70" {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}>
                    {label} {highlight && <span className="relative top-px" >✦</span>} {external && EXTERNAL_LINK_ARROW}
                </Link>
            ))}
        </nav>
    );
}