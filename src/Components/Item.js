import React from "react";
import "./Item.css";
import StarRating from "./StarRating";

export default function Item({ data }){
    return (
        <div className="item">
            {
                data.map((singleData) => (
                    <>
                        <div className="image">
                            <img className="poster" src={singleData.Poster} alt="movie" />
                        </div>
                        <div className="movieData">
                            <h3>{singleData.Title}</h3>
                            <p>{singleData.Year}</p>
                            <StarRating size={1.2} color="yellow" />
                        </div>  
                    </>
                ))
            }
        </div>
    )
}
