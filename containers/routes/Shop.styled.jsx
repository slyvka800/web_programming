import styled from "styled-components";
import Select from "react-select";
import React from "react";

export const sortingOptions = [
  { value: "title", label: "Name" },
  { value: "fuel", label: "Fuel capacity" },
  { value: "passengers", label: "Passengers capacity" },
];

export const orderOptions = [
  { value: "asc", label: "Ascending order" },
  { value: "desc", label: "Descending order" },
];

export const StyledFiltersDiv = styled.div`
  height: 100px;
  width: 75%;
  display: flex;
  flex-direction: row;
  margin-left: 100px;
`;

export const StyledFilterWithLabel = styled.div`
  height: 100px;
  width: 300px;
  display: flex;
  flex-direction: column;
  margin-right: 40px;
`;

const StyledSearchInputDiv = styled.div`
  margin-top: 40px;
`;

export const StyledFilters = ({ sortingType, sortingOrder }) => {
  return (
    <StyledFiltersDiv>
      <StyledFilterWithLabel>
        <h3>Sort by</h3>
        <Select
          options={sortingOptions}
          onChange={(e) => sortingType(e.value)}
        />
      </StyledFilterWithLabel>
      <StyledFilterWithLabel>
        <h3>Sort order</h3>
        <Select
          options={orderOptions}
          onChange={(e) => sortingOrder(e.value)}
        />
      </StyledFilterWithLabel>
    </StyledFiltersDiv>
  );
};

export const StyledSearchInput = ({ searchingPattern }) => {
  return (
    <StyledSearchInputDiv>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => searchingPattern(e.target.value)}
      />
    </StyledSearchInputDiv>
  );
};
