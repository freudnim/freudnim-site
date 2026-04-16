import Image from "next/image";

const links = [
    // { href: "#home", label: "home" },
    { href: "#about", label: "about" },
    { href: "/comms", label: "comms" },
    { href: "/contact", label: "contact" },
    { href: "/shop", label: "shop" },
    { href: "/featured", label: "featured" },
];

export default function Nav() {
    return (
        <nav className="flex flex-row">
            {links.map(({ href, label }) => (
                <a key={href} href={href} className="transition-transform duration-200 ease-out hover:-translate-y-2">
                    <span className="inline-block pr-2">
                        {/* <Image src="/frog.png" alt="Frog" height={12} width={12} unoptimized /> */}
                    </span>
                    {label}
                </a>
            ))}
        </nav>
    );
}