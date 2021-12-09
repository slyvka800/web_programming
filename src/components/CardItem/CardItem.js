import React from "react";
import { Card, Button } from "antd";
import { Footer } from "./CardItem.styled";
import { NavLink, Route, Routes } from "react-router-dom";
import { ItemPage } from "./ItemPage";

const { Meta } = Card;

const CardItem = ({id, title='No title.', text, imageSrc, price }) => (
  <Card
    hoverable
    style={{ width: 400, borderRadius: "60px" }}
    cover={
      <img style={{ borderRadius: "60px" }} alt="example" src={imageSrc} />
    }
  >
    <Meta title={title} description={text} />
    <Footer>
      <p>${price}</p>
      <NavLink to={`/shop/${id}`}>
        <Button>Show More</Button>
      </NavLink>
    </Footer>
  </Card>
);

export default CardItem;
