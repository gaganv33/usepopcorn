import React from "react";

export default function Error({ error }){

    const style = {
        display : "flex",
        flexDirection : "row",
        maxHeight : "80vh",
        justifyContent : "center",
        width : "60vh",
        padding : "3rem",
    }

    return (
        <div style={style}>
            <p>{error}</p>
        </div>
    )
};
