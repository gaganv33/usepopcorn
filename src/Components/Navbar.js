import React, { useEffect, useRef } from "react";
import "./Navbar.css";

export default function Navbar({ count, search, setSearch }){
	const inputElement = useRef(null);
	useEffect(function() {
		function callback(e){
			if(document.activeElement === inputElement){
				return;
			}
			if(e.code === "Enter"){
				inputElement.current.focus();
				setSearch("");
			}
		}

		document.addEventListener("keydown", callback);

		return function() {
			document.removeEventListener("keydown", callback);
		}
	}, [setSearch]);

	return (
		<nav className="nav-bar">
			<div>
				<h3>Home</h3>
			</div>
			<div>
				<input className="search" type="text" placeholder="Search" value={search} onChange={(e) => {
					setSearch(e.target.value);
				}} ref={inputElement} />
			</div>
			<div>
				<p>Found <strong>{count}</strong> results</p>
			</div>
		</nav>
	)
}
