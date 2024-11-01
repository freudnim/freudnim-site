export function isUrl(url) {
    // Regex from https://stackoverflow.com/a/3809435, with a modification to allow for TLDs of up to 24 characters
    return /^https?:\/\/(www\.)?[-a-zA-Z0-9\u1F60-\uFFFF@:%._\+~#=]{2,256}\.[a-z]{2,256}\b([-a-zA-Z0-9\u1F60-\uFFFF@:%_\+.~#?&//=]*)/.test(
        url
    );
}

export function isNumeric(num) {
    return !isNaN(num);
}