import React from 'react';
import Header from "../../components/Header/Header";
import SellerCard from "../../components/Card/SellerCard";
import './Dashboard.css';
import useDashboard from "../../hooks/useDashboard";

function Dashboard(props) {
  const [sellers, orders, countries] = useDashboard()

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

      <div className="selectContainer">

        <select name="" id="" onChange={(e) => {
          console.log(e.target.value)
        }}>
          <option label={'All sellers'} value={'all sellers'}/>
          {sellers.map(seller => {
            return (
              <option key={seller.id} label={seller.name} value={seller.name}/>
            )
          })}
        </select>

        <select name="countries" id="countries" onChange={(e) => {
          console.log(e.target.value)
        }}>
          <option label={'All countries'} value={'all countries'}/>
          {countries.map(country => {
            return (
              <option key={country} label={country} value={country}/>
            )
          })}
        </select>

      </div>
      {/*<Table data={orders} />*/}

      <label htmlFor="">This is the DashboardScreen</label>
    </div>
  );
}

export default Dashboard;