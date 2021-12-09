import React from "react";
import logo from "/Users/pa_slyvka/Downloads/student-shop-main/src/Icons/plane-icon.jpeg"
import { Wrapper, IconsWrapper, VerticalLine, LogoWrapper, StyledText, IconBase } from "./Footer.styled";
import Icon, {
    TwitterOutlined,
    InstagramOutlined,
    LinkedinOutlined,
    YoutubeOutlined,
  } from "@ant-design/icons";

const Footer = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <img src={logo} style={{width:70}}/>
        <h1>Fabulous Wings</h1>
      </LogoWrapper>
      <VerticalLine />
      <IconsWrapper>
          <IconBase component={YoutubeOutlined} color='#FF0000'/>
          <IconBase component={TwitterOutlined} color='#03A9F4' />
          <IconBase component={LinkedinOutlined} color='#007AB9'/>
          <IconBase component={InstagramOutlined} color='#3A9F4'/>
      </IconsWrapper>
      <VerticalLine />
      <StyledText>© Fabulous Wings all rights reserved</StyledText>
    </Wrapper>
  );
};

export default Footer;
