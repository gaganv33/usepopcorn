import React from "react";
import "./Display.css";

export default function Display({ children }){
    return (
            <div className="display">
                {children}
            </div>
    )
}
