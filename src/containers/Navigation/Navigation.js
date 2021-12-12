import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import { LinkingWrapper } from './Navigation.styles';
import Home, { data } from '../Home/Home';
import Shop from "containers/routes/Shop";
import { ItemPage } from "components/CardItem/ItemPage";
import Cart from "../../components/Cart/Cart";

const Navigation = () => (
  <Router>
    <LinkingWrapper>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="selected">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/shop" activeClassName="selected">
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/blog" activeClassName="selected">
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/contact" activeClassName="selected">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" activeClassName="selected">
            Cart
          </NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/shop/:id" element={<ItemPage/>}/>
        {/* </Route> */}
        <Route path="/blog">
          <div>Hello it is blog</div>
        </Route>
        <Route path="/contact">
          <div>Hello it is contact</div>
        </Route>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
    </LinkingWrapper>
  </Router>
);

export default Navigation;