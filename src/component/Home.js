import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Table from "./Table";

const Home = ({ itemList, updateCart }) => {
  const [filterSearch, setFilterSearch] = useState("");
  const [filterList, setFilterList] = useState(itemList);

  const updateTable = (searchKey) => {
    setFilterSearch(searchKey);
    if (searchKey) {
      setFilterList(
        itemList.filter((item) =>
          item.name.toLowerCase().includes(searchKey.toLowerCase())
        )
      );
      console.log(filterList);
    } else {
      setFilterList(itemList);
    }
  };

  return (
    <div>
      <SearchBar updateTable={updateTable} searchWord={filterSearch} />
      <Table itemList={filterList} updateCart={updateCart} />
    </div>
  );
};

export default Home;
