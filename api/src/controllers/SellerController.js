import {sellerRepository} from "../repositories/sellerRepository.mjs";
import {orderRepository} from "../repositories/orderRepository.mjs";

export default {

  async index(request, response) {
    const sellers = await sellerRepository.index();
    return response.json(sellers);
  },

  async show(request, response) {
    const {id} = request.params;
    const seller = await sellerRepository.find(id);
    return response.json(seller);
  },

  async showOrders(request, response) {
    const {id} = request.params;
    const orders = await orderRepository.findBySeller(id);
    return response.json(orders);
  }
}