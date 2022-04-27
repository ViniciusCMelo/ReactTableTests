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
    try {
      const {id} = request.params;
      const seller = await sellerRepository.find(id);

      if (seller.length === 0) {
        throw new Error(`Seller with id: ${id} not found`)
      }
      const orders = await orderRepository.findBySeller(id);

      return response.json(orders);
    } catch (exception) {
      return response.status(404).json({message: exception.message})
    }
  },

  async getTotalValue(request, response) {

    try {
      const {id} = request.params;
      let payload = {totalValue: 0, sellerId: id}

      const seller = await sellerRepository.find(id);

      if (seller.length === 0) {
        throw new Error(`Seller with id: ${id} not found`)
      }

      const orders = await orderRepository.findBySeller(id);

      orders.forEach(order => {
        payload.totalValue += order.price;
      });

      return response.json(payload);

    } catch (exception) {
      console.error(exception)
      return response.status(404).json(exception.message);
    }
  }
}