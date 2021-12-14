import React from "react";
import { useParams } from "react-router-dom";
import { ItemDetails } from "./ItemDetails";

export const ItemPage = () => {
    let params = useParams();
    // console.log(params)

    return(
        <div>
            <ItemDetails planeId = {params.id}/>
        </div>
    )
}