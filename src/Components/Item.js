import React from "react";
import "./Item.css";

export default function Item({ Poster, Title, Year, imdbID }){
    return (
        <div className="item">
            <div className="image">
                <img className="poster" src={Poster} alt="movie" />
            </div>
            <div className="movieData">
                <h3>{Title}</h3>
                <p>{Year}</p>
            </div>
        </div>
    )
}
