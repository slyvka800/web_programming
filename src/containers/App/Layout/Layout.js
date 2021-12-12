import React from "react";
import logo from "/Users/pa_slyvka/Downloads/student-shop-main/src/Icons/plane-icon.jpeg"
import { StyledHeader, IconsWrapper} from "./Layout.styles";
import {
  TwitterOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  InstagramOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const Layout = () => (
  <StyledHeader title="Fabulous Wings">
    <div>
      <IconsWrapper>
        <img src={logo} style={{width:70, height:70, marginTop:-20}}/>
      </IconsWrapper>
      <p>Fabulous Wings</p>
    </div>
    <div>
      <IconsWrapper>
        <TwitterOutlined />

        <FacebookOutlined />

        <InstagramOutlined />
      </IconsWrapper>
    </div>
    <div>
      <IconsWrapper>
        <SearchOutlined />
        
        <ShoppingCartOutlined />
      </IconsWrapper>
    </div>
  </StyledHeader>
);

export default Layout;