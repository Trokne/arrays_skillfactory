export function concatArraysAsc(a, b, c) {
    if (!Array.isArray(a) || !Array.isArray(b) || !Array.isArray(c)) {
        return null;
    }

    return a.concat(b).concat(c);
}

export function concatArraysDesc(a, b, c) {
    if (!Array.isArray(a) || !Array.isArray(b) || !Array.isArray(c)) {
        return null;
    }

    return c.concat(b).concat(a);
}