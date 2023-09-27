import React from "react";
import "./ItemWatch.css";

export default function ItemWatch({ watch, setWatch }){

    function handleOnCloseButton(singleData){
        const tempArray = [...watch];
        const newArray = tempArray.filter((single) => single.imdbID !== singleData.imdbID);
        setWatch(newArray);
    };

    return (
        <>
            {
                watch.map((singleData) => (
                    <div className="itemwatch" key={singleData.imdbID}>
                        <div className="header">
                            <img className="imageWatch" src={singleData.Poster} alt="Movie" />
                        </div>
                        <div className="singleData">
                            {singleData.Title}
                            <div className="statistics">
                                <span>✨{singleData.imdbRating}</span>
                                <span>⭐{singleData.userRating}</span>
                                <span>⌚{singleData.Runtime}</span>
                            </div>
                        </div>
                        <div className="itemWatchedClose">
                            <button className="itemWatchedCloseButton" onClick={() => handleOnCloseButton(singleData)}>✖️</button>
                        </div>
                    </div>
                ))
            }
        </>
    );
}
