import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Display from "./Components/Display";
import List from "./Components/List";
import ListWatched from "./Components/ListWatched";
import Item from "./Components/Item";
import Selected from "./Components/Selected";
import Loader from "./Components/Loading";
import Error from "./Components/Error";
import { useGetMovies } from "./useGetMovies";

/*
const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
  {
    Poster: "https://m.media-amazon.com/images/M/MV5BMzdmOTA5MDMtYmRiOS00NTVmLTlhZGUtOWEwMjAyYWQ4NDdlXkEyXkFqcGdeQXVyMjExMjk0ODk@._V1_SX300.jpg",
    Title: "Inspector Lewis",
    Type: "series",
    Year: "2006–2015",
    imdbID: "tt0874608",
  },
  {
    Poster: "https://m.media-amazon.com/images/M/MV5BNzk4NzIzNTktOWMyNC00NTJiLWI2MjktMDg2YmVmNDZkMzkyXkEyXkFqcGdeQXVyMTE1MTYxMzk2._V1_SX300.jpg",
    Title: "Parker Lewis Can't Lose",
    Type: "series",
    Year: "1990–1993",
    imdbID: "tt0098888",
  },
  {
    Poster: "https://m.media-amazon.com/images/M/MV5BYjA5ZjlkZDAtMDViNy00MTFiLTg0NTUtMDY0MzZmNDc1NTVmXkEyXkFqcGdeQXVyNTcyNTc3NA@@._V1_SX300.jpg",
    Title: "Lewis Capaldi: How I'm Feeling Now", 
    Type: "movie",
    Year: "2023",
    imdbID: "tt27078772",
  },
  {
    Poster: "https://m.media-amazon.com/images/M/MV5BNTQzNzM1NzY2N15BMl5BanBnXkFtZTcwMTg1MzI0MQ@@._V1_SX300.jpg",
    Title: "Inspector Lewis",
    Type: "movie",
    Year: "2006",
    imdbID: "tt0469870",
  },
  { 
    Poster: "https://m.media-amazon.com/images/M/MV5BMjI4ODM5MjQwMl5BMl5BanBnXkFtZTgwNDk2ODkwMzE@._V1_SX300.jpg",
    Title: "Lewis Black: Black on Broadway",
    Type: "movie",
    Year: "2004",
    imdbID: "tt0414224",
  },
  {
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc4NjUzNjg5OV5BMl5BanBnXkFtZTcwMzI4MzUzMQ@@._V1_SX300.jpg",
    Title: "Lewis Black: Red, White and Screwed",
    Type: "movie",
    Year: "2006",
    imdbID: "tt0814187",
  },
  {
    Poster: "https://m.media-amazon.com/images/M/MV5BMTY2NjQ0OTE0OV5BMl5BanBnXkFtZTcwODc5NDYxMQ@@._V1_SX300.jpg",
    Title: "Lewis & Clark: The Journey of the Corps of Discovery",
    Type: "movie",
    Year: "1997",
    imdbID: "tt0129694",
  },
  {
    Poster: "https://m.media-amazon.com/images/M/MV5BN2M5MDA3NmUtM2Y2YS00NmU3LWJiMjEtZWY2ZDE4MGY1OWZjXkEyXkFqcGdeQXVyMTA2MDU0NjM5._V1_SX300.jpg",
    Title: "John Lewis: Good Trouble",
    Type: "movie",
    Year: "2020",
    imdbID: "tt10310096",
  },
  {
    Poster: "https://m.media-amazon.com/images/M/MV5BYWEzYmUxMGItZGY3ZS00YmE5LWI2YmItMDhlYTQxYTdkN2E3XkEyXkFqcGdeQXVyNTAxNDUyNg@@._V1_SX300.jpg",
    Title: "Jerry Lewis: The Man Behind the Clown",
    Type: "movie",
    Year: "2016",
    imdbID: "tt5635898",
  },
  {
    Poster: "https://m.media-amazon.com/images/M/MV5BZGIwNjMzOWEtOGU1OS00NDkwLWI2YTYtZGI3NWU0YTQwN2Q0XkEyXkFqcGdeQXVyMjg0Mjg1MDM@._V1_SX300.jpg",
    Title: "Martin and Lewis",
    Type: "movie",
    Year: "2002",
    imdbID: "tt0318908",
  },
];
*/
  
// const tempWatchedData = [
//     {
//       imdbID: "tt1375666",
//       Title: "Inception",
//       Year: "2010",
//       Poster:
//         "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//       runtime: 148,
//       imdbRating: 8.8,
//       userRating: 10,
//     },
//     {
//       imdbID: "tt0088763",
//       Title: "Back to the Future",
//       Year: "1985",
//       Poster:
//         "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
//       runtime: 116,
//       imdbRating: 8.5,
//       userRating: 9,
//     }
// ];
  
export default function App(){
    const [search, setSearch] = useState("");
    const [watch, setWatch] = useState(function (){
      const storedData = JSON.parse(localStorage.getItem("watched"));
      return (storedData ? storedData : []);
    });
    const [isDataOpen, setIsDataOpen] = useState(true);
    const [isWatchOpen, setIsWatchOpen] = useState(true);
    const [selected, setSelected] = useState(null);

    let averageUserRating = 0;
    let averageImdbRating = 0;
    let toalRuntime = 0;

    watch.map((singleData) => {
      let runTime = "";
      const runtime = singleData.Runtime;
      for(let  i = 0; i < runtime.length; i++){
        if(runtime[i] === " "){
          break;
        }
        runTime += runtime[i];
      }
      runTime = runTime - '0';
      toalRuntime += (runTime ? runTime : 0);
      averageImdbRating += (singleData.imdbRating - '0' ? singleData.imdbRating - '0' : 0);
      averageUserRating += (singleData.userRating ? singleData.userRating - '0' : 0);
      return singleData;
    });
    
    averageImdbRating = Math.round(averageImdbRating / watch.length, 2);
    averageUserRating = Math.round(averageUserRating / watch.length, 2);

    const { loading, error, data } = useGetMovies(search);

    useEffect(function() {
      localStorage.setItem("watched", JSON.stringify(watch ? watch : []));
    }, [watch]);

    return (
        <div className="app">
            <Navbar count={data.length} search={search} setSearch={setSearch} />
            <div className="data">
                <Display>
                  {
                    loading && <Loader />
                  }
                  {
                    !loading && !error && <List setIsDataOpen={setIsDataOpen} isDataOpen={isDataOpen}>
                                            <Item data={data} setSelected={setSelected} />
                                          </List>
                  }
                  {
                    error && <Error error={error} />
                  }
                  {
                    (selected === null) ? (<ListWatched count={watch.length} averageImdbRating={averageImdbRating} toalRuntime={toalRuntime} averageUserRating={averageUserRating} isWatchOpen={isWatchOpen} setIsWatchOpen={setIsWatchOpen} watch={watch} setWatch={setWatch} />) : <Selected selected={selected} setSelected={setSelected} setWatch={setWatch} watch={watch} />
                  }
                </Display>
            </div>
        </div>
    )
}
