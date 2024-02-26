function calculateTotalSalesWithTax(products, taxRate) {
  let totalSalesWithoutTax = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0,
  );
  console.log(totalSalesWithoutTax);
  let taxAmount = (totalSalesWithoutTax * taxRate) / 100;
  let totalSalesWithTax = totalSalesWithoutTax + taxAmount;
  console.log(totalSalesWithTax);
  return totalSalesWithTax;
}

module.exports = calculateTotalSalesWithTax;
