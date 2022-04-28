import React, { useState } from 'react';
import Header from "../../components/Header/Header";
import SellerCard from "../../components/Card/SellerCard";
import './Dashboard.css';
import useDashboard from "../../hooks/useDashboard";
import Table from "../../components/Table/Table"

function Dashboard(props) {
  const [sellers, orders, countries] = useDashboard()
  const [searchedCountry, setSearchedCountry] = useState("");
  const [searchedSeller, setSearchedSeller] = useState("All sellers");


  return (
    <div className="container">
      <Header/>
      <h1>Orders Dashboard</h1>
      <div className="cardContainer">
        {sellers.map(seller => {
          return (
            <SellerCard key={seller.id} title={seller.name} content={`$${seller.totalAmount}`}/>
          )
        })}
      </div>

      <div className="selectContainer">

        <select name="" id="" onChange={(e) => {
          setSearchedSeller(e.target.value)
        }}>
          <option label={'All sellers'} value={"All sellers"}/>
          {sellers.map(seller => {
            return (
              <option key={seller.id} label={seller.name} value={seller.id}/>
            )
          })}
        </select>

        <select name="countries" id="countries" onChange={(e) => {
          setSearchedCountry(e.target.value)
        }}>
          <option label={'All countries'} value={''}/>
          {countries.map(country => {
            return (
              <option key={country} label={country} value={country}/>
            )
          })}
        </select>

      </div>
      <div className="tableContainer">
        {orders.length > 0 ? <Table data={orders} countries={searchedCountry} seller={searchedSeller}/> : <></>}
      </div>
    </div>
  );
}

export default Dashboard;