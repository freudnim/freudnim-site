import { useState } from "react";
import { TwitterIcon } from "@/components/icons";

export function ArtCard({ post }: { post: any }) {
    const [loaded, setLoaded] = useState(false);

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

                {/* twitter overlay */}
                {loaded && (
                    <div className="absolute bottom-2 right-2 opacity-80 group-hover:opacity-100 transition text-blue-600">
                        <TwitterIcon className="w-4 h-4 drop-shadow" />
                    </div>
                )}
            </div>
        </a>
    );
}