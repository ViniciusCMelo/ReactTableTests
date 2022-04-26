import {sellers} from '../../database/sellers.js'

export const sellerRepository = {

  async index() {
    return sellers;
  },
  async find(id) {
    let searchResult = {};

    try {
      searchResult = sellers.filter(seller => (seller.id == id));
    } catch (exception) {
      console.error(exception);
    }

    return searchResult;
  }
}