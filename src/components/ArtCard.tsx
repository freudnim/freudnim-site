import { useState } from "react";
import { TwitterIcon, BlueskyIcon } from "@/components/icons";

export function ArtCard({ post }: { post: any }) {
    const [loaded, setLoaded] = useState(false);
    const platform = getPlatform(post.url);

    return (
        <a
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block break-inside-avoid group"
        >
            <div className="relative">
                <img
                    src={post.image}
                    alt="gifted art"
                    onLoad={() => setLoaded(true)}
                    className={`w-full rounded-lg transition-transform duration-200 group-hover:scale-[1.02] ${loaded ? "opacity-100" : "opacity-0"
                        }`}
                />

                {/* social watermark overlay */}
                {loaded && (
                    <div className="absolute bottom-2 right-2 opacity-80 group-hover:opacity-100 transition text-blue-600">
                        {platform === "twitter" && (
                            <TwitterIcon className="w-4 h-4 drop-shadow" />
                        )}
                        {platform === "bluesky" && (
                            <BlueskyIcon className="w-4 h-4 drop-shadow" />
                        )}
                    </div>
                )}
            </div>
        </a>
    );
}

function getPlatform(url: string) {
    if (url.includes("x.com") || url.includes("twitter.com")) return "twitter";
    if (url.includes("bsky.app")) return "bluesky";
    return null;
}