export function truncateText(text, maxLength = 60) {
    return text.length > maxLength 
        ? text.substring(0, maxLength) + '...' 
        : text;
}