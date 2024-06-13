function findItemsOver20(items) {
    return items.filter(item => item.qty > 20);
}

module.exports = findItemsOver20;
