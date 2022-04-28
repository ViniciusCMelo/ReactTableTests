import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./screens/Dashboard/Dashboard";
import Info from "./screens/Info/Info";

function Router(props) {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/info" element={<Info/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;