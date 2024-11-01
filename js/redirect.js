import { isUrl } from "./utils.js";

const GITHUB_ISSUES_LINK =
    "https://api.github.com/repos/freudnim/freudnim-url-shortener/issues";
const PATH_SEGMENTS_TO_SKIP = 0;

const location = window.location;
const keyword = location.pathname.split("/")[PATH_SEGMENTS_TO_SKIP + 1];
const homepage =
    location.protocol +
    "//" +
    location.hostname +
    (location.port ? ":" + location.port : "") +
    "/" +
    location.pathname.split("/")[PATH_SEGMENTS_TO_SKIP];
if (keyword) {
    const xhr = new XMLHttpRequest();
    xhr.onload = redirect;
    xhr.onerror = onError;
    xhr.open("GET", GITHUB_ISSUES_LINK);
    xhr.send();
}

function redirect() {
    try {
        const payload = JSON.parse(xhr.response);
        const message = payload.message;
        let link = "";
        for (let i = 0; i < payload.length; i++) {
            const issue = payload[i];
            const issueBody = encodeURIComponent(issue.body);
            if (issueBody == keyword) {
                link = issue.title;
                break;
            }
        }
        // Workaround IE 11 lack of support for new URL()
        const url = document.createElement("a");
        url.setAttribute("href", link);

        // Invalid URLs includes invalid issue numbers, issue titles that are not URLs, and recursive destination URLs
        const isInvalidUrl =
            message === "Not Found" ||
            !link ||
            !isUrl(link) ||
            url.hostname === location.hostname;

        if (isInvalidUrl) {
            location.replace(homepage);
        } else {
            location.replace(link);
        }
    } catch (e) {
        location.replace(homepage);
    }
}

function onError() {
    location.replace(homepage);
}
