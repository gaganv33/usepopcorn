import React from "react";
import "./Item.css";

export default function Item({ data, setSelected }){
    function handleOnClick(singleData){
        setSelected(singleData.imdbID);
    }

    return (
        <>
            {
                data.map((singleData) => (
                    <div className="item" onClick={() => handleOnClick(singleData)} key={singleData.imdbID}>
                        <div className="image">
                            <img className="poster" src={singleData.Poster} alt="movie" />
                        </div>
                        <div className="movieData">
                            <h3>{singleData.Title}</h3>
                            <p>{singleData.Year}</p>
                        </div>  
                    </div>
                ))
            }
        </>
    )
}
