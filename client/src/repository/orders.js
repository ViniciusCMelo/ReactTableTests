import api from "../services/api";

export async function getOrdersFromSeller(sellerId) {
  try {
    const response = await api.get(`/sellers/${sellerId}/orders`);
    return response.data;
  } catch (exception) {
    console.error(exception);
    return [];
  }
}

export async function getAllOrders() {
  try {
    const response = await api.get(`orders`);
    return response.data;
  } catch (exception) {
    console.error(exception);
    return [];
  }
}