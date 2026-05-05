"use client";

import Image from "next/image";
import { TwitterIcon, BlueskyIcon } from "@/components/icons";

export function ArtCard({ post }: { post: any }) {
    const platform = getPlatform(post.url);

    return (
        <a
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block break-inside-avoid group"
        >
            <div className="relative">
                <Image
                    src={post.image}
                    alt="gifted art"
                    width={800}
                    height={800}
                    className="w-full h-auto rounded-lg transition-transform duration-200 group-hover:scale-[1.02]"
                />

                {/* social watermark overlay */}
                {platform && (
                    <div className="absolute bottom-2 right-2 opacity-80 group-hover:opacity-100 transition text-blue-600">
                        {platform === "twitter" && (
                            <TwitterIcon className="w-4 h-4 drop-shadow" />
                        )}
                        {platform === "bluesky" && (
                            <BlueskyIcon className="w-4 h-4 drop-shadow" />
                        )}
                    </div>
                )}

                {/* gray overlay for kudoboard / padlet */}
                {(platform === "kudoboard" || platform === "padlet") && (
                    <>
                        <div className="absolute inset-0 bg-black/70 z-10 pointer-events-none rounded-lg transition-transform duration-200 group-hover:scale-[1.02]" />
                        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none ">
                            <span className="text-white font-semibold text-xl tracking-wide drop-shadow">
                                Birthday {getBirthdayLabel(post.image)}
                            </span>
                        </div>
                    </>
                )}
            </div>
        </a>
    );
}

function getPlatform(url: string) {
    if (url.includes("x.com") || url.includes("twitter.com")) return "twitter";
    if (url.includes("bsky.app")) return "bluesky";
    if (url.includes("kudoboard")) return "kudoboard";
    if (url.includes("padlet")) return "padlet";
    return null;
}

function getBirthdayLabel(image: string) {
    const fileName = image.split("/").pop() || image;
    const base = fileName.split("_")[0];
    const parts = base.split("-");
    const year = parts[parts.length - 1];
    return year || "";
}