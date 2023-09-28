import React from "react";
import "./ListWatched.css";
import ItemWatch from "./ItemWatch";

export default function ListWatched({ count, averageImdbRating, toalRuntime, averageUserRating,  isWatchOpen, setIsWatchOpen, watch, setWatch }){
    function handleCloseButton(){
        setIsWatchOpen((value) => {
            return !value;
        });
    };

    return (
        <div className="listwatched">
            <div className="information">
                <div className="heading">
                    <span>MOVIES YOU WATCHED</span>
                    <span><button className="closeButton" onClick={handleCloseButton}>{isWatchOpen ? "-" : "+"}</button></span>
                </div>
                <div className="stats">
                    <span>🎞️ {count} movie</span>
                    <span>⭐ {averageImdbRating ? averageImdbRating: 0}</span>
                    <span>✨ {averageUserRating ? averageUserRating : 0}</span>
                    <span>⌚ {toalRuntime}</span>
                </div>
            </div>
            {
                isWatchOpen ? <ItemWatch watch={watch} setWatch={setWatch} /> : null
            }
        </div>
    )
}
