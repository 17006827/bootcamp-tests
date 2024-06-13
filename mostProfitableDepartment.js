function mostProfitableDepartment(salesData) {
    let departments = {};
    salesData.forEach(entry => {
        if (departments[entry.department] === undefined) {
            departments[entry.department] = 0;
        }
        departments[entry.department] += entry.sales;
    });
    let maxSales = 0;
    let mostProfitableDept = '';
    for (const [department, sales] of Object.entries(departments)) {
        if (sales > maxSales) {
            maxSales = sales;
            mostProfitableDept = department;
        }
    }
    return mostProfitableDept;
}

module.exports = mostProfitableDepartment;
