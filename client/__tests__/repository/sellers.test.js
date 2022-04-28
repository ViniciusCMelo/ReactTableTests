import { getTotalSoldBySeller, getAllSellers } from "../../src/repository/sellers";
import api from "../../src/services/api"

jest.mock('../../src/services/api');

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
const mockSellers = [
  {
    "name": "Seller #1",
    "id": 1
  },
  {
    "name": "Seller #2",
    "id": 2
  }
];

const mockRequest = (response) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: response })
    }, 200)
  })
}

const mockRequestError = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject()
    }, 200)
  })
}

describe("repository/sellers", () => {
  beforeEach(() => {
    api.get.mockClear();
  })
  describe("getTotalSoldBySeller", () => {

    it(`should return '10.00' if the seller has 2 orders with price of 5`, function () {
      const totalSold = getTotalSoldBySeller(mockSeller.id, mockOrders);

      expect(totalSold).toBe('10.00');
    });
  })

  describe("getAllSellers", () => {
    it('should return a list of sellers', async () => {
      api.get.mockImplementation(() => mockRequest(mockSellers))
      const sellers = await getAllSellers();

      expect(sellers).toEqual(mockSellers);
      expect(api.get).toHaveBeenCalledWith('sellers');
      expect(api.get).toHaveBeenCalledTimes(1);

    });

    it('should return an empty list when request fails', async () => {
      api.get.mockImplementation(() => mockRequestError())
      const sellers = await getAllSellers();

      expect(sellers).toEqual([]);
      expect(api.get).toHaveBeenCalledWith('sellers');
      expect(api.get).toHaveBeenCalledTimes(1);
    });
  })
})