import {Router} from 'express';
import SellerController from "./controllers/SellerController.js";
import OrderController from "./controllers/OrderController.js";

const routes = Router();

routes.get('/health', (request, response) => {
  const data = {
    uptime: process.uptime(),
    message: 'Ok, its working',
    date: new Date()
  }
  response.status(200).send(data);
});

//Sellers
routes.get('/sellers', SellerController.index);
routes.get('/sellers/:id', SellerController.show);
routes.get('/sellers/:id/orders', SellerController.showOrders);


//Orders
routes.get('/orders', OrderController.index);
routes.get('/orders/:id', OrderController.show);

export default routes;