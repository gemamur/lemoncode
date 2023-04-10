import React from "react";

export const HolaMundo = () => {
    const url = process.env.API_BASE_URL;
    console.log(url);
    return(
        <>
            <div>Hola Mundo!</div>
        </>
    )
}