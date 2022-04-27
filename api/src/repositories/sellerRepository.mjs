import {readFile} from 'fs/promises';

const sellers = JSON.parse(
  await readFile(
    new URL('../../database/sellers.json', import.meta.url)
  )
);


export const sellerRepository = {

  async index() {
    return sellers;
  },
  async find(id) {
    let searchResult = {};
    searchResult = sellers.filter(seller => (seller.id == id));
    return searchResult[0];
  }
}