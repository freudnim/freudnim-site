"use client";

import { useEffect } from "react";

function isValidUrl(value: string) {
    try {
        const url = new URL(value);
        return url.protocol === "http:" || url.protocol === "https:";
    } catch {
        return false;
    }
}

export default function RedirectHandler() {

    useEffect(() => {
        const location = window.location;
        const keyword = location.pathname.replace(/^\/+/, "");
        if (!keyword) return;

        const homepage = `${location.protocol}//${location.host}/`;

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
    }, []);

    return null; // this page does not render anything
}
