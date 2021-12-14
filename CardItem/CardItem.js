import React from "react";
import { Card, Button } from "antd";
import { Footer } from "./CardItem.styled";
import { NavLink, Route, Routes } from "react-router-dom";
import { ItemPage } from "./ItemPage";
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '/Users/pa_slyvka/Downloads/student-shop-main/src/redux/actions/index.js'
import { useState } from "react";

const { Meta } = Card;

const CardItem = ({ id, title = "No title.", text, imageSrc, price }) => {

  const cart = useSelector(state => state.cart)
  const [isInCart, setIsInCart] = useState(() => {
      return cart.find(itemInCart => itemInCart.id == id) != null ? true : false
  })
  const dispatcher = useDispatch()

  return (
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
      <div className="buttons">
        {isInCart ? (
          <button
            className="remove"
            onClick={() => {
              setIsInCart(false);
              dispatcher(removeFromCart(id));
            }}
          >
            Remove from cart
          </button>
        ) : (
          <button
            className="add"
            onClick={() => {
              setIsInCart(true);
              dispatcher(addToCart(id));
            }}
          >
            Add to cart
          </button>
        )}
      </div>
    </Card>
  );
}

export default CardItem;
