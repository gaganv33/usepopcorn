import React from "react";
import "./Display.css";
import List from "./List";
import ListWatched from "./ListWatched";

export default function Display({ data, watch, isDataOpen, setIsDataOpen, stats, isWatchOpen, setIsWatchOpen }){
    return (
            <div className="display">
                <List data={data} setIsDataOpen={setIsDataOpen} isDataOpen={isDataOpen} />   
                <ListWatched stats={stats} watch={watch} isWatchOpen={isWatchOpen} setIsWatchOpen={setIsWatchOpen} />
            </div>
    )
}
