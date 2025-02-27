function generateRandomString(length) {
    return Math.random()
        .toString(36)
        .slice(2, 2 + length);
}

function generateRandomEmail() {
    const timestamp = new Date().getTime();
    return `test_${timestamp}${generateRandomString(5)}@example.com`;
}

module.exports = {
    generateRandomString,
    generateRandomEmail
}