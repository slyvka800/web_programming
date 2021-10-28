import React from "react";
import { StyledHeader, IconsWrapper, PlaneLogo } from "./Layout.styles";
import {
  TwitterOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  InstagramOutlined,
  FacebookOutlined,
} from "@ant-design/icons";

const Layout = () => (
  <StyledHeader title="Glay Shop">
    <div>
      <IconsWrapper>
        <PlaneLogo/>
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