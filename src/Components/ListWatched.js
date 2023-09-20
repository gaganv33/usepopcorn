import React from "react";
import "./ListWatched.css";
import ItemWatch from "./ItemWatch";

export default function ListWatched({ stats, watch, isWatchOpen, setIsWatchOpen }){
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
                    <span><button className="closeButton" onClick={handleCloseButton}>-</button></span>
                </div>
                <div className="stats">
                    <span>🎞️ {stats.count} movie</span>
                    <span>⭐ {stats.imdbRating}</span>
                    <span>✨ {stats.userRating}</span>
                    <span>⌚ {stats.totalWatchMin}</span>
                </div>
            </div>
            {
                isWatchOpen ? 
                watch.map((singleMovie) => (<ItemWatch Title={singleMovie.Title} Poster={singleMovie.Poster} runtime={singleMovie.runtime} imdbRating={singleMovie.imdbRating} userRating={singleMovie.userRating} key={singleMovie.imdbID} />)) : null
            }
        </div>
    )
}
