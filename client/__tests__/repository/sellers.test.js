import { getTotalSoldBySeller } from "../../src/repository/sellers";

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
const mockSeller = {
  "name": "Seller #1",
  "id": 1
};


describe("repository/sellers", () => {

  describe("getTotalSoldBySeller", () => {

    it(`should return '10.00' if the seller has 2 orders with price of 5`, function () {
      const totalSold = getTotalSoldBySeller(mockSeller.id, mockOrders);

      expect(totalSold).toBe('10.00');
    });
  })
})