import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Table from "./Table";

const Home = ({ itemList, updateCart, updateQuery }) => {
  return (
    <div>
      <SearchBar updateQuery={updateQuery} />
      <Table itemList={itemList} updateCart={updateCart} />
    </div>
  );
};

export default Home;
