import api from "../services/api";

export function getTotalSoldBySeller(sellerId, orders) {
  try {
    let totalSold = 0;
    orders.forEach(order => {
      if(order.seller === sellerId) totalSold += order.price;
    });
    return totalSold.toFixed(2);
  } catch (exception) {
    return [];
  }
}

export async function getAllSellers() {
  try {
    const response = await api.get(`sellers`);
    return response.data;
  } catch (exception) {
    return [];
  }
}