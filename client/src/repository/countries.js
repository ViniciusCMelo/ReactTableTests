export function getCountriesFromOrders(orders) {
  let countries = [];
  orders.forEach(order => {
    countries.push(order.country);
  })
  return [...new Set(countries)];
}