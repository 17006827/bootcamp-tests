function countAllFromTown(registrationNumbers, location) {
    const regNumbersArray = registrationNumbers.split(',');
    const filteredNumbers = regNumbersArray.filter(regNumber => regNumber.startsWith(location));
    return filteredNumbers.length;
}

module.exports = countAllFromTown;
