function yearsAgo(year) {
    const currentYear = new Date().getFullYear();
    return currentYear - year;
}

module.exports = yearsAgo;
