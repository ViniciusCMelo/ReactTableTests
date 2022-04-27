import { getCountriesFromOrders } from "../../src/repository/countries";

const mockOrders = [
  {
    "orderId": 2019060001,
    "product": "Laptop #1",
    "seller": 1,
    "country": "BRA",
    "price": 5
  },
  {
    "orderId": 2019060002,
    "product": "Laptop #2",
    "seller": 1,
    "country": "ARG",
    "price": 5
  },
  {
    "orderId": 2019060002,
    "product": "Laptop #2",
    "seller": 2,
    "country": "ARG",
    "price": 1250
  }
];

describe("repository/countries", () => {

  describe("getCountriesFromOrders", () => {

    it(`should return array of unique countries from orders`, () => {
      const countries = getCountriesFromOrders(mockOrders);

      expect(countries).toEqual(["BRA","ARG"]);
    })
  })
})