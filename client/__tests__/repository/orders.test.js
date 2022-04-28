import api from "../../src/services/api"
import { getAllOrders, getOrdersFromSeller } from "../../src/repository/orders";

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
const ordersFromSeller = [
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
  }
]
const mockSeller = {
  "name": "Seller #1",
  "id": 1
};

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

describe("repository/orders", () => {
  beforeEach(() => {
    api.get.mockClear();
  })
  describe("getOrdersFromSeller", () => {

    it(`should return list of Orders from the Seller`, async () => {
      api.get.mockImplementation(() => mockRequest(ordersFromSeller))
      const orders = await getOrdersFromSeller(mockSeller.id);

      expect(orders).toEqual(ordersFromSeller);
      expect(api.get).toHaveBeenCalledWith(`/sellers/${mockSeller.id}/orders`);
      expect(api.get).toHaveBeenCalledTimes(1);
    });
  })

  describe("getAllOrders", () => {
    it('should return a list of sellers', async () => {
      api.get.mockImplementation(() => mockRequest(mockOrders))
      const sellers = await getAllOrders();

      expect(sellers).toEqual(mockOrders);
      expect(api.get).toHaveBeenCalledWith('orders');
      expect(api.get).toHaveBeenCalledTimes(1);

    });

    it('should return an empty list when request fails', async () => {
      api.get.mockImplementation(() => mockRequestError())
      const sellers = await getAllOrders();

      expect(sellers).toEqual([]);
      expect(api.get).toHaveBeenCalledWith('orders');
      expect(api.get).toHaveBeenCalledTimes(1);
    });
  })
})