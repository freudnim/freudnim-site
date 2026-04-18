import {
    TwitterIcon,
    TwitchIcon,
    BlueskyIcon,
    VGenIcon,
    YouTubeIcon,
    GitHubIcon,
} from "@/components/icons";

type SocialLink = {
    href: string;
    ariaLabel: string;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const socialLinks: SocialLink[] = [
    {
        href: "https://twitter.com/freudnim",
        ariaLabel: "Twitter",
        Icon: TwitterIcon,
    },
    {
        href: "https://www.twitch.tv/freudnim",
        ariaLabel: "Twitch",
        Icon: TwitchIcon,
    },
    {
        href: "https://bsky.app/profile/freudnim.co",
        ariaLabel: "Bluesky",
        Icon: BlueskyIcon,
    },
    {
        href: "https://vgen.co/freudnim",
        ariaLabel: "VGen",
        Icon: VGenIcon,
    },
    {
        href: "https://www.youtube.com/@freudnim",
        ariaLabel: "YouTube",
        Icon: YouTubeIcon,
    },
    {
        href: "https://www.github.com/freudnim",
        ariaLabel: "GitHub",
        Icon: GitHubIcon,
    },
];

export default function Footer() {
    return (
        <div className="w-full pt-6">
            <footer className="flex justify-center gap-9 py-6 footer-border">
                {socialLinks.map(({ href, ariaLabel, Icon }) => (
                    <a
                        key={ariaLabel}
                        href={href}
                        aria-label={ariaLabel}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-70 transition-opacity"
                    >
                        <Icon className="footer-icon-color" />
                    </a>
                ))}
            </footer>
        </div>
    );
}