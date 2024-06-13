function regCheck(registrationNumber, location) {
    return registrationNumber.endsWith(location);
}

module.exports = regCheck;
