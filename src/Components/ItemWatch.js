import React from "react";
import "./ItemWatch.css";

export default function ItemWatch({ Title, runtime, imdbRating, Poster, userRating }){
    return (
        <div className="itemwatch">
            <div className="header">
                <img className="imageWatch" src={Poster} alt="Movie" />
            </div>
            <div className="singleData">
                {Title}
                <div className="statistics">
                    <span>✨{imdbRating}</span>
                    <span>⭐{userRating}</span>
                    <span>⌚{runtime}</span>
                </div>
            </div>
        </div>
    );
}
