import React from "react";
import SearchBar from "./SearchBar";
import Table from "./Table";

const Home = ({ itemList, updateCart }) => {
  return (
    <div>
      <SearchBar />
      <Table itemList={itemList} updateCart={updateCart} />
    </div>
  );
};

export default Home;
