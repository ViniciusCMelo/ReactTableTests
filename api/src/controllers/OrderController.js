import {orderRepository} from "../repositories/orderRepository.mjs";

export default {

  async index(request, response) {
    const orders = await orderRepository.index();

    return response.json(orders);
  },

  async show(request, response) {
    const {id} = request.params;
    const seller = await orderRepository.find(id);

    return response.json(seller);
  },
}