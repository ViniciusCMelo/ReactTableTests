import { useEffect, useState } from "react";
import { getAllOrders } from "../repository/orders";
import { getAllSellers } from "../repository/sellers";


export default function useDashboard(id) {
console.log('useDashboard')
  const [sellers, setSellers] = useState([]);
  const [orders, setOrders] = useState([]);

  const updateDashboard = async () => {
    const updatedOrders = await getAllOrders();
    const updatedSellers = await getAllSellers();

    setOrders(updatedOrders);
    setSellers(updatedSellers);
  };

  useEffect(() => {
    updateDashboard();
  }, []);

  return [sellers, orders];
}