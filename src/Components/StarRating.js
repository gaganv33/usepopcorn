import React, { useState } from "react";

export default function StarRating({ size = 0.5, color = "red", maxRating = 5, setIsAdd, setSelectedRating }){
    const [rating, setRating] = useState(0);
    const [tempRating, setTempRating] = useState(0);

    const starRatingStyle = {
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        gap: "1rem",
        fontSize : `${size}rem`,
        justifyContent: "center",
        textAlign : "center"
    }
    const containerStyle = {
        display : "flex",
    }
    const textStyle = {
        color : `${color}`,
    }

    return (
        <div style={starRatingStyle}>
            <div style={containerStyle}>
                {
                    Array.from({ length: maxRating}, (_, i) => {
                        return <Star size={size} setRating={setRating} setTempRating={setTempRating} i={i} full={tempRating ? tempRating > i : rating > i} color={color} key={i} setIsAdd={setIsAdd} setSelectedRating={setSelectedRating} />
                    })
                }
            </div>
            <p style={textStyle}>
                {tempRating ? tempRating : rating ? rating : null}
            </p>
        </div>
    );
}

function Star({ size, setRating, setTempRating, i, full, color, setIsAdd, setSelectedRating }){
    const starStyle = {
        width : `${size}rem`,
        height : `${size}rem`,
        display: "block",
        cursor : "pointer",
    };

    function handleOnClick(){
        setIsAdd(true);
        setRating(i + 1);
        setSelectedRating(i + 1);
    }

    function handeOnMouseEnter(){
        setTempRating(i + 1);
    }

    function handleOnMouseLeave(){
        setTempRating(0);
    }

    return (
        <div style={starStyle}>
            <span onClick={handleOnClick} onMouseEnter={handeOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
                {
                    full ?
                    (<svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill={color}
                        stroke={color}
                        >
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                        </svg>) : (
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke={color}
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="{2}"
                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                            />
                            </svg>
                        )
                }
            </span>
        </div>
    );
}

