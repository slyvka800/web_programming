import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { decrementQuantityInCart, incrementQuantityInCart, removeFromCart } from '../../redux/actions'
import item_image from "../../Icons/an-225.jpeg"
import './cart.css'


const CartItem = ({ id, name, price, item_count , setToUpdate, image}) => {

    const cart = useSelector(state => state.cart)
    const [quantityInCart, setQuantityInCart] = 
        useState(() => cart.find(item => item.id == id).quantity)
    const dispatcher = useDispatch()

    return (
        <div className="cart-item">
            <img className="cart-item-image" src={image} alt="Item"/>
            <div className="cart-item-description">
                <h2 className="item-name">{name}</h2>
                <label className="item-price">Price: {price} hrn.</label>
                <label className="item-price">Total price: {item_count * price} hrn.</label>
                <label className="item-count">Quantity: {item_count}</label>
                <NavLink to={`/item/${id}`}>View more</NavLink>
            </div>
            <button onClick={() => {
                if (quantityInCart > 1) {
                    setQuantityInCart(prev => prev - 1)
                    dispatcher(decrementQuantityInCart(id))
                }
                else {
                    dispatcher(removeFromCart(id))
                }
                setToUpdate(true)
            }}>-</button>
            <h4 className="quantity">{quantityInCart}</h4>
            <button onClick={() => {
                setQuantityInCart(prev => prev + 1)
                dispatcher(incrementQuantityInCart(id))
                setToUpdate(true)
            }}>+</button>
            <h4 className="total">{quantityInCart * item_count * price} hrn.</h4>
        </div>
    )
}

export default CartItem
