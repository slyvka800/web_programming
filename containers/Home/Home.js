import React from "react";
import HeaderPic from "../../Icons/an-225.jpeg";
import ImageModel1 from "../../Icons/B-747-Iberia.jpeg";
import ImageModel2 from "../../Icons/A380-Emirates.jpeg";
import ImageModel3 from "../../Icons/Funny-Taking-Off-Plane.jpeg";
import {
  SectionWrapper,
  StyledText,
  StyledButton,
  CardWrapper,
} from "./Home.styled";
import CardItem from "../../components/CardItem/CardItem";

const data = [
  {
    title: "Badass thunder of all skies",
    text: "The Boeing 747 is a large, long-range wide-body airliner \
    manufactured by Boeing Commercial Airplanes in the United States.",
    image: ImageModel1,
    price: 4000000,
  },
  {
    title: "Airbus A380",
    text:
      "The Airbus A380 is a wide-body aircraft manufactured by Airbus. It is the world's largest passenger airliner.",
    image: ImageModel2,
    price: 3682900,
  },
  {
    title: "Marvelous aircraft",
    text:
      "No comments, it's just our vision of future",
    image: ImageModel3,
    price: 9250610,
  },
];

const Home = () => {
  return (
    <div>
      <SectionWrapper>
        <StyledText>
          <h1>Enjoy worlds first-class planes</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            scelerisque tristique neque, eget facilisis purus consequat sit
            amet. Nulla iaculis felis eget rutrum blandit. Morbi volutpat sapien
            eget odio gravida, eu placerat erat eleifend. Aliquam erat volutpat.
            Quisque sed tincidunt felis. Sed bibendum
          </p>
          <StyledButton size="large">Show More</StyledButton>
        </StyledText>
        <img src={HeaderPic} style={{height:300, margin:40, marginTop:80, borderRadius:60}}/>
      </SectionWrapper>
      <CardWrapper>
        {data.map(({ title, text, image, price }, idx) => (
          <CardItem
            title={title}
            text={text}
            imageSrc={image}
            price={price}
            id={idx}
          />
        ))}
      </CardWrapper>
    </div>
  );
};

export default Home;