function isWeekday(day) {
    return !day.startsWith('S');
}

module.exports = isWeekday;
