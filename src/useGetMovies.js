import { useState, useEffect } from "react";

const KEY = "d6c527a3";

export function useGetMovies(search){
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [data, setData] = useState([]);

    useEffect(function() {
        const controller = new AbortController();
        async function fetchMovies(){
            try{
            setLoading(true);
            setError("");
            const res = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${KEY}&s=${search}`, {
                signal : controller.signal,
            });

            if (!res.ok){
                throw new Error("Something went wrong with fetching movies");
            }
            const data = await res.json();
            if (data.Response === "False"){
                throw new Error(data.Error);
            }
            setData(data.Search);
            setError("");
            }
            catch(err){
            if(err.name !== "AbortError"){
                setError(err.message);
            }
            }
            finally{
            setLoading(false);
            }
        }

        if(search.length > 3){
            setLoading(false);
            setError(false);
            fetchMovies();
        }
        return function(){
            controller.abort();
        }
    }, [search]);

    return {loading, error, data};
};
