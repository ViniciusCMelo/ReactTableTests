import React from 'react';
import Header from "../../components/Header/Header";
import SellerCard from "../../components/Card/SellerCard";
import './Dashboard.css';
import useDashboard from "../../hooks/useDashboard";
import { getTotalSoldBySeller } from "../../repository/sellers";

function Dashboard(props) {
  const [sellers, orders] = useDashboard()

  return (
    <div className="container">
      <Header/>
      <h1>Orders</h1>
      <div className="cardContainer">
        {sellers.map(seller => {
          return (
            <SellerCard key={seller.id} title={seller.name} content={`$${seller.totalAmount}`}/>
          )
        })}
      </div>
      <select name="sellers" id="sellers">Sellers</select>
      <select name="countries" id="countries">Countries</select>
      {/*<Table data={orders} />*/}

      <label htmlFor="">This is the DashboardScreen</label>
    </div>
  );
}

export default Dashboard;