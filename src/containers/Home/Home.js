import React, { useEffect, useState } from "react";
import HeaderPic from "../../Icons/an-225.jpeg";
import ImageModel1 from "../../Icons/B-747-Iberia.jpeg";
import ImageModel2 from "../../Icons/A380-Emirates.jpeg";
import ImageModel3 from "../../Icons/Funny-Taking-Off-Plane.jpeg";
import { Spinner } from "components/Spinner/soinner";

import {
  SectionWrapper,
  StyledText,
  StyledButton,
  CardWrapper,
  ViewMoreButton,
  ButtonWraper
} from "./Home.styled";
import CardItem from "../../components/CardItem/CardItem";
import styled from "styled-components";
import { style } from "dom-helpers";
import axios from "axios";
import getPlanesFromDB from "servachok/servachok";

// export const data = [
//   {
//     id: 0,
//     title: "Badass thunder of all skies",
//     text: "The Boeing 747 is a large, long-range wide-body airliner \
//     manufactured by Boeing Commercial Airplanes in the United States.",
//     image: ImageModel1,
//     price: 4000000,
//     passengers: 500,
//     fuel: 35000,
//   },
//   {
//     id: 1,
//     title: "Airbus A380",
//     text:
//       "The Airbus A380 is a wide-body aircraft manufactured by Airbus. It is the world's largest passenger airliner.",
//     image: ImageModel2,
//     price: 3682900,
//     passengers: 890,
//     fuel: 50000,
//   },
//   {
//     id: 2,
//     title: "Marvelous aircraft",
//     text:
//       "No comments, it's just our vision of future",
//     image: ImageModel3,
//     price: 9250610,
//     passengers: 15000,
//     fuel: 10,
//   },
// ];

export let data = []


const Home = () => {
  const [planes, setPlanes] = useState(data)
  let planesFromServachok = getPlanesFromDB()
  console.log(planesFromServachok)

  axios.get("http://127.0.0.1:5000/plane").then(
    res => {
      planesFromServachok = res.data
      console.log(planesFromServachok)
    }
  )

  useEffect( () => {
    setTimeout( () => {
      // setPlanes(planesFromServachok)
      data = planesFromServachok
      setPlanes(planesFromServachok)
      var elem = document.getElementById("spinner");
      if (elem != null) {
        elem.parentNode.removeChild(elem);
      }
      // console.log(planesFromServachok)
    }, 1000)
  }, [])
  
  const additionalPlane = {
    title: "Casual aircraft",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: HeaderPic,
    price: 16000000,
    passengers: 330,
    fuel: 16000
  }

  const addPlanes = () => {
    let tmpPlanes = [...planes]
    for(let i = 0; i<3; i++) {
      tmpPlanes.push(additionalPlane)
    }
    setPlanes(tmpPlanes)
  }

  // let id = 0

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
        <Spinner/>
        {planes.map(({ title, text, image, price }, idx) => (
          <CardItem
            title={title}
            text={text}
            imageSrc={image}
            price={price}
            id={idx}
          />
        ))}
      </CardWrapper>
      <ButtonWraper>
        <ViewMoreButton onClick={addPlanes}>View More</ViewMoreButton>
      </ButtonWraper>
    </div>
  );
};

export default Home;