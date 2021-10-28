import React from "react";
import { Wrapper, IconsWrapper, VerticalLine, LogoWrapper, StyledText, IconBase } from "./Footer.styled";
import Icon, {
    TwitterOutlined,
    InstagramOutlined,
    LinkedinOutlined,
    YoutubeOutlined,
    AliwangwangOutlined
  } from "@ant-design/icons";

const Footer = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <IconBase component={AliwangwangOutlined} />
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
