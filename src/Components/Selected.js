import React, { useEffect, useState } from "react";
import "./Selected.css";
import StarRating from "./StarRating";
import Loader from "./Loading";
import Error from "./Error";
import logo from "../logo192.png";

const KEY = "d6c527a3";

export default function Selected({ selected, setSelected, setWatch, watch }){
    const [selectedRating, setSelectedRating] = useState(0);
    const [isOpen, setIsOpen] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [isAdd, setIsAdd] = useState(false);
    const [selectedData, setSelectedData] = useState({});
    const [found, setFound] = useState(false);

    const foundData = watch.filter((singleData) => {
        return singleData.imdbID === selected[0].imdbID;
    });
    
    useEffect(function (){
        async function fetchInformation(){
            try{
                setIsLoading(true);
                setErrorMsg("");
                const title = selected.at(0).Title;
                const res = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${KEY}&t=${title}&plot=full`);
                const data = await res.json();
                if(data.Response === 'False'){
                    throw new Error(data.Error);
                }
                setSelectedData(data);
            }
            catch(err){
                setErrorMsg(err.message);
            }
            finally{
                setIsLoading(false);
            }
        }
        if(foundData.length === 0){
            fetchInformation();
        }
        else{
            setFound(true);
            setSelectedData(foundData[0]);
        }
    }, [selected]);

    function handleBackButton(){
        setSelected([]);
    }

    function handleCloseButton(){
        setIsOpen((value) => {return !value});
    }

    function handleAddButton(){
        setWatch([...watch, {...selectedData, userRating: selectedRating}]);
        setSelectedData({});
        setSelected([]);
    }

    return (
        <div className="selected">
            {
                isLoading && <Loader />
            }
            {
                !isLoading && !errorMsg && <>
                                        <div className="closeContainer">
                                            <button className="backButton" onClick={handleBackButton}>Back</button>
                                            <button className="closeButton" onClick={handleCloseButton}>{isOpen ? "-" : "+"}</button>
                                        </div>
                                        {isOpen && <>
                                                <div className="imageContainer">
                                                    <img src={selectedData?.Poster ? selectedData?.Poster : logo} alt={selectedData?.Title ? selectedData?.Title : "Title"} className="selectedImage" />
                                                    <div className="information">
                                                        <p>{selectedData?.Title ? selectedData?.Title : "Title"}</p>
                                                        <p>{selectedData?.Released}-{selectedData?.Runtime}</p>
                                                        <p>Genre: {selectedData?.Genre}</p>
                                                        <p>Type: {selectedData?.Type}</p>
                                                        <p>🌟 {selectedData?.imdbRating} imDb rating</p>
                                                    </div>
                                                </div>
                                                <div className="informationContainer">
                                                    {
                                                        foundData.length === 0 ?
                                                        <StarRating color="#FFED8A" maxRating={10} size={1.5} setIsAdd={setIsAdd} key={selectedData?.imdbID} setSelectedRating={setSelectedRating} /> : 
                                                        <p>You have rated this movie ⭐ {foundData[0].userRating}</p>
                                                    }
                                                    {
                                                        !found && isAdd && <button className="addButton" onClick={handleAddButton}>+ Add to list</button>
                                                    }
                                                </div>  
                                                <div className="informationContainer">
                                                    <p>{selectedData?.Plot}</p>
                                                    <p>Starring {selectedData?.Actors}</p>
                                                    <p>Directed by {selectedData?.Director}</p>
                                                </div>
                                            </>
                                        }   
                                    </>
            }
            {
                errorMsg && <Error error={errorMsg} />
            }
        </div>
    )
}
