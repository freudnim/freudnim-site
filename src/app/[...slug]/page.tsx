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

        const redirect = async () => {
            try {
                const res = await fetch(
                    "https://api.github.com/repos/freudnim/freudnim-site/issues"
                );
                const issues: any[] = await res.json();

                const matchedIssue = issues.find(
                    (issue) => encodeURIComponent(issue.body) === keyword
                );

                const link = matchedIssue?.title ?? "";
                const url = document.createElement("a");
                url.href = link;

                const isInvalidUrl =
                    !link || !isValidUrl(link) || url.hostname === location.hostname;

                location.replace(isInvalidUrl ? homepage : link);
            } catch {
                window.location.replace(homepage);
            }
        };

        redirect();
    }, [keyword]);

    return null; // this page does not render anything
}
