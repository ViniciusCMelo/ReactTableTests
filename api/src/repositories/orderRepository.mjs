import {orders} from '../../database/orders.js'

export const orderRepository = {

  async index() {
    return orders;
  },

  async find(id) {
    let searchResult = {};

    try {
      searchResult = orders.filter(order => (order.orderId == id));
    } catch (exception) {
      console.error(exception);
    }

    return searchResult;
  },

  async findBySeller(sellerId) {
    let searchResult = {};

    try {
      searchResult = orders.filter(order => (order.seller == sellerId));
    } catch (exception) {
      console.error(exception);
    }

    return searchResult;
  }
}