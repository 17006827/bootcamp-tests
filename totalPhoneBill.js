function totalPhoneBill(usage) {
    const callAndSMSArray = usage.split(',');
    let totalCost = 0;
    callAndSMSArray.forEach(item => {
        if (item.trim() === 'call') {
            totalCost += 2.75;
        } else if (item.trim() === 'sms') {
            totalCost += 0.65;
        }
    });
    return 'R' + totalCost.toFixed(2);
}

module.exports = totalPhoneBill;
