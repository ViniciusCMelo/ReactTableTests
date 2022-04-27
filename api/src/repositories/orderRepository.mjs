import {readFile} from 'fs/promises';
import {sellerRepository} from "./sellerRepository.mjs";

const ordersData = JSON.parse(
  await readFile(
    new URL('../../database/orders.json', import.meta.url)
  )
);

export const orderRepository = {

  async index() {
    return ordersData;
  },

  async find(id) {
    let searchResult = {};
    console.log(ordersData)
    try {
      searchResult = ordersData.filter(order => (order.orderId == id));
    } catch (exception) {
      console.error(exception);
    }

    return searchResult;
  },

  async findBySeller(sellerId) {
    let searchResult = {};

    try {
      searchResult = ordersData.filter(order => (order.seller == sellerId));
    } catch (exception) {
      console.error(exception);
    }

    return searchResult;
  }
}