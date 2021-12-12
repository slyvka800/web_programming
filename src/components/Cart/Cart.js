import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import { NavLink } from 'react-router-dom'
import { data } from '../../containers/Home/Home'

const Cart = ({ allItemsMap }) => {

    allItemsMap = data

    console.log(allItemsMap)

    const cart = useSelector(state => state.cart)
    const reducer = (previous, current) => previous
        + current.price * current.item_count
    const [total, setTotal] = useState(() => 0)
    const [toUpdate, setToUpdate] = useState(() => false)

    useEffect(() => {
        setTotal(cart.reduce(reducer, 0))
        setToUpdate(false)
    }, [toUpdate])

    return (
        <div className='cart'>
            <h1>Your cart</h1>
            { cart.length > 0
                ? <></>
                : <h2 className="empty">Your cart is empty</h2>
            }
            {cart.map(item => <CartItem key={item.id} id={item.id} name={allItemsMap[item.id-1].title}
                price={allItemsMap[item.id-1].price} item_count={allItemsMap[item.id-1].item_count}
                image={allItemsMap[item.id-1].image} setToUpdate={setToUpdate}/>)}
            <h4>Total: {total} hrn.</h4>
            <NavLink to='/shop'>Back to shop</NavLink>
        </div>
    )
}

export default Cart
