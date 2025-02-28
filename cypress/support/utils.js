function generateRandomString(length) {
    return Math.random()
        .toString(36)
        .slice(2, 2 + length);
}

function generateRandomEmail() {
    return `test_${generateRandomString(5)}@example.com`;
}

export {
    generateRandomString,
    generateRandomEmail
}