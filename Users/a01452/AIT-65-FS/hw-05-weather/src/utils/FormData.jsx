export function formatTime(unix, timezone) {
    const date = new Date((unix + timezone) * 1000);
    return date.toUTCString().match(/\d{2}:\d{2}/)[0];
}
