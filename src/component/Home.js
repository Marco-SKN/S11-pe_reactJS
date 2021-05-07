import React from "react";
import SearchBar from "./SearchBar";
import Table from "./Table";

const Home = ({ itemList }) => {
  return (
    <div>
      <SearchBar />
      <Table itemList={itemList} />
    </div>
  );
};

export default Home;
