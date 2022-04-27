import { useEffect, useState } from "react";
import { getAllOrders } from "../repository/orders";
import { getAllSellers, getTotalSoldBySeller } from "../repository/sellers";
import { getCountriesFromOrders } from "../repository/countries";


export default function useDashboard(id) {
  console.log('useDashboard')
  const [sellers, setSellers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [countries, setCountries] = useState([]);
  const updateDashboard = async () => {
    const updatedOrders = await getAllOrders();
    const updatedSellers = await getAllSellers();

    const updatedCountries = getCountriesFromOrders(updatedOrders);

    updatedSellers.forEach(seller => {
      seller.totalAmount = getTotalSoldBySeller(seller.id, updatedOrders);
    })
    setOrders(updatedOrders);
    setSellers(updatedSellers);
    setCountries(updatedCountries);
  };

  useEffect(() => {
    updateDashboard();
  }, []);

  return [sellers, orders, countries];
}