import React from "react";
import "./ItemWatch.css";

export default function ItemWatch({ watch }){
    return (
        <div className="itemwatch">
            {
                watch.map((singleData) => (
                    <>
                        <div className="header">
                            <img className="imageWatch" src={singleData.Poster} alt="Movie" />
                        </div>
                        <div className="singleData">
                            {singleData.Title}
                            <div className="statistics">
                                <span>✨{singleData.imdbRating}</span>
                                <span>⭐{singleData.userRating}</span>
                                <span>⌚{singleData.runtime}</span>
                            </div>
                        </div>
                    </>
                ))
            }
        </div>
    );
}
