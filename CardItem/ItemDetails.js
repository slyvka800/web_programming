import React from "react";
import { data } from "containers/Home/Home";
import { useState } from "react";
import { Image, Info, InfoPiece } from "./ItemDetails.styles";

export const ItemDetails = ({planeId}) => {
    // console.log(planeId)
    // console.log(data)
    const [item] = useState(data.find(item => item.id == planeId))
    return(
        <div style={{display:"flex", flexDirection:"row"}}>
            <Image src={item.image} />
            <Info>
                <InfoPiece>
                    Name: {item.title}
                </InfoPiece>
                <InfoPiece>
                    Price: {item.price}
                </InfoPiece>
                <InfoPiece>
                    Passengers amount: {item.passengers}
                </InfoPiece>
                <InfoPiece>
                    Fuel capacity: {item.fuel}
                </InfoPiece>
                <InfoPiece>
                    {item.text}
                </InfoPiece>
            </Info>
        </div>
    )
}