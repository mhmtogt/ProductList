import React from "react";

import "./App.scss";
//import Header from "./components/header/Header";
import HeaderH from "./components/headerHam/HeaderH";

import Products from "./components/products/Products";
import { products, categories } from "./helper/data";

function App() {
  return (
    <div>
      {/* <Header categories={categories} text="Products List" /> */}
      {/* categories disizini gönderdik headera eğer gönderdiğmiz değer bir değişkense  bunu süslü parantez içinde yazmaları gerekr  çünkü js ifadesi jsx içinde yazmak istediğmiz için*/}
      <HeaderH categories={categories} />

      <Products products={products} />
    </div>
  );
}

export default App;
