function fromWhere(carReg) {
    switch (carReg) {
        case 'CY':
            return 'Bellville';
        case 'CJ':
            return 'Paarl';
        case 'CA':
            return 'Cape Town';
        default:
            return 'Some other place!';
    }
}

module.exports = fromWhere;
