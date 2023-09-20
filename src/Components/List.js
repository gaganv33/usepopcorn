import React from "react";
import "./List.css";
import Item from "./Item";

export default function List({ data, setIsDataOpen, isDataOpen }){
    function handleCloseButton(){
        setIsDataOpen((value) => {
            return !value;
        });
    };

    return (
        <div className="list">
            <div className="close">
                <button className="closeButton" onClick={handleCloseButton}>-</button>
            </div>
            {
                isDataOpen ? 
                data.map((singleData) => (<Item Poster={singleData.Poster} Year={singleData.Year} Title={singleData.Title} imdbID={singleData.imdbID} key={singleData.imdbID} />)) : null
            }            
        </div>
    )
}