import React from "react";
import "./List.css";

export default function List({ setIsDataOpen, isDataOpen, children }){
    function handleCloseButton(){
        setIsDataOpen((value) => {
            return !value;
        });
    };

    return (
        <div className="list">
            <div className="close">
                <button className="closeButton" onClick={handleCloseButton}>{isDataOpen ? "-" : "+"}</button>
            </div>
            {
                isDataOpen ? children : null
            }            
        </div>
    )
}