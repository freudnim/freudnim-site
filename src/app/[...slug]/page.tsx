"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";

function isValidUrl(value: string) {
    try {
        const url = new URL(value);
        return url.protocol === "http:" || url.protocol === "https:";
    } catch {
        return false;
    }
}

export default function RedirectPage() {
    const params = useParams();
    const slug = params?.slug;
    const keyword = Array.isArray(slug) ? slug[0] : slug;

    useEffect(() => {
        if (!keyword) return;

        const location = window.location;
        const homepage = `${location.protocol}//${location.hostname}${location.port ? ":" + location.port : ""
            }/`;

        fetch("https://api.github.com/repos/freudnim/freudnim-site/issues")
            .then((res) => res.json())
            .then((issues: any[]) => {
                let link = "";

                for (const issue of issues) {
                    if (encodeURIComponent(issue.body) === keyword) {
                        link = issue.title;
                        break;
                    }
                }

                try {
                    const url = document.createElement("a");
                    url.href = link;

                    const isInvalidUrl =
                        !link || !isValidUrl(link) || url.hostname === location.hostname;

                    location.replace(isInvalidUrl ? homepage : link);
                } catch {
                    location.replace(homepage);
                }
            })
            .catch(() => location.replace(homepage));
    }, [params.slug]);

    return null; // this page does not render anything
}
