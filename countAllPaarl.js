function countAllPaarl(registrationNumbers) {
    const regNumbersArray = registrationNumbers.split(',');
    const paarlNumbers = regNumbersArray.filter(regNumber => regNumber.startsWith('CJ'));
    return paarlNumbers.length;
}

module.exports = countAllPaarl;
