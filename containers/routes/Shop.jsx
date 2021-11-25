import React, { useState, useEffect } from "react";
import { createFilter } from "react-search-input";
import { data } from "containers/Home/Home";
import CardItem from "../../components/CardItem/CardItem";

import { CardWrapper } from "containers/Home/Home.styled";
import { StyledFilters, StyledSearchInput } from "./Shop.styled";
export default function Shop() {
  const [planes, setPlanes] = useState([]);
  const [sortType, setSortType] = useState("title");
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchPattern, setSearchPattern] = useState("");

  const stringCompare = (a, b) => {
    if (a === b) {
      return 0;
    }
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
  };

  const sortArray = (type) => {
    const types = {
      title: "title",
      fuel: "fuel",
      passengers: "passengers",
    };

    const sortProperty = types[type];
    let sorted = [...data].sort((a, b) => b[sortProperty] - a[sortProperty]);

    if (sortProperty === "title") {
      sorted = [...data].sort((a, b) => stringCompare(a["title"], b["title"]));
    }

    console.log(sorted);
    setPlanes(sorted);
  };

  const search = () => {
    const KEYS_TO_FILTER = ["title", "fuel", "text", "price", "passengers"];
    const filteredPlanes = [...data].filter(
      createFilter(searchPattern, KEYS_TO_FILTER)
    );
    console.log(searchPattern);
    console.log(filteredPlanes);
    setPlanes(filteredPlanes);
  };

  useEffect(() => {
    console.log(sortType);
    sortArray(sortType);
  }, [sortType]);

  useEffect(() => {
    if (sortOrder === "desc") {
      const reversedPlanes = [...planes].reverse();
      setPlanes(reversedPlanes);
    } else {
      sortArray(sortType);
    }
  }, [sortOrder]);

  useEffect(() => {
    search();
  }, [searchPattern]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <StyledFilters sortingType={setSortType} sortingOrder={setSortOrder} />

        <StyledSearchInput searchingPattern={setSearchPattern} />
      </div>

      <CardWrapper>
        {planes.map(({ id, title, text, image, price }) => (
          <CardItem
            key={id}
            title={title}
            text={text}
            imageSrc={image}
            price={price}
            id={id}
          />
        ))}
      </CardWrapper>
    </div>
  );
}
