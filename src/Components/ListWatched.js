import React from "react";
import "./ListWatched.css";

export default function ListWatched({ count, averageImdbRating, toalRuntime, averageUserRating,  isWatchOpen, setIsWatchOpen, children }){
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
                    <span>⭐ {averageImdbRating}</span>
                    <span>✨ {averageUserRating}</span>
                    <span>⌚ {toalRuntime}</span>
                </div>
            </div>
            {
                isWatchOpen ? children : null
            }
        </div>
    )
}
